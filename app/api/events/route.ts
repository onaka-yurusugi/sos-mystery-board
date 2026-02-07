import { NextRequest } from "next/server";
import { getEvents, createEvent } from "@/app/lib/storage";
import type { MysteryEventCategory, CreateMysteryEventInput } from "@/app/types/event";

const VALID_CATEGORIES: MysteryEventCategory[] = [
  "UFO",
  "幽霊",
  "超能力",
  "その他",
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category");

  const events = await getEvents();

  if (category) {
    if (!VALID_CATEGORIES.includes(category as MysteryEventCategory)) {
      return Response.json(
        { error: `無効なカテゴリ。有効値: ${VALID_CATEGORIES.join(", ")}` },
        { status: 400 }
      );
    }
    const filtered = events.filter((e) => e.category === category);
    return Response.json(filtered);
  }

  return Response.json(events);
}

export async function POST(request: NextRequest) {
  let body: CreateMysteryEventInput;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "無効なJSON形式" },
      { status: 400 }
    );
  }

  const { title, description, category, location, reporter } = body;

  if (!title || !description || !category || !location || !reporter) {
    return Response.json(
      { error: "title, description, category, location, reporter は必須" },
      { status: 400 }
    );
  }

  if (!VALID_CATEGORIES.includes(category)) {
    return Response.json(
      { error: `無効なカテゴリ。有効値: ${VALID_CATEGORIES.join(", ")}` },
      { status: 400 }
    );
  }

  const newEvent = await createEvent({
    title,
    description,
    category,
    location,
    reporter,
  });

  return Response.json(newEvent, { status: 201 });
}
