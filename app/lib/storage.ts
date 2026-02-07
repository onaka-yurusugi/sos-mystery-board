import fs from "node:fs/promises";
import path from "node:path";
import type { MysteryEvent, CreateMysteryEventInput } from "@/app/types/event";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "events.json");

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE_PATH);
  } catch {
    const dir = path.dirname(DATA_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, "[]", "utf-8");
  }
}

async function readEvents(): Promise<MysteryEvent[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
  return JSON.parse(raw) as MysteryEvent[];
}

async function writeEvents(events: MysteryEvent[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(events, null, 2), "utf-8");
}

export async function getEvents(): Promise<MysteryEvent[]> {
  return readEvents();
}

export async function getEventById(
  id: string
): Promise<MysteryEvent | undefined> {
  const events = await readEvents();
  return events.find((e) => e.id === id);
}

export async function createEvent(
  input: CreateMysteryEventInput
): Promise<MysteryEvent> {
  const events = await readEvents();
  const newEvent: MysteryEvent = {
    ...input,
    id: `evt-${Date.now().toString(36)}`,
    createdAt: new Date().toISOString(),
  };
  events.push(newEvent);
  await writeEvents(events);
  return newEvent;
}

export async function deleteEvent(id: string): Promise<boolean> {
  const events = await readEvents();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) {
    return false;
  }
  events.splice(index, 1);
  await writeEvents(events);
  return true;
}
