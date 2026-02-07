import { getEventById, deleteEvent } from "@/app/lib/storage";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    return Response.json(
      { error: "イベントが見つからない" },
      { status: 404 }
    );
  }

  return Response.json(event);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const deleted = await deleteEvent(id);

  if (!deleted) {
    return Response.json(
      { error: "イベントが見つからない" },
      { status: 404 }
    );
  }

  return Response.json({ message: "削除完了" });
}
