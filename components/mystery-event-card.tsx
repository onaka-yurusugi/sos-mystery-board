import type { MysteryEvent, MysteryEventCategory } from "@/app/types/event";

const CATEGORY_BADGE_COLORS: Record<MysteryEventCategory, string> = {
  UFO: "bg-green-600/20 text-green-300 border-green-500/30",
  "幽霊": "bg-purple-600/20 text-purple-300 border-purple-500/30",
  "超能力": "bg-pink-600/20 text-pink-300 border-pink-500/30",
  "その他": "bg-gray-600/20 text-gray-300 border-gray-500/30",
};

type MysteryEventCardProps = {
  event: MysteryEvent;
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function MysteryEventCard({ event }: MysteryEventCardProps) {
  return (
    <article className="group rounded-xl border border-sos-card-border bg-sos-card p-5 transition-all hover:border-sos-amber/40 hover:shadow-lg hover:shadow-sos-amber/5">
      <div className="mb-3 flex items-start justify-between gap-2">
        <span
          className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${CATEGORY_BADGE_COLORS[event.category]}`}
        >
          {event.category}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-sos-text group-hover:text-sos-amber transition-colors">
        {event.title}
      </h3>

      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-sos-muted">
        {event.description}
      </p>

      <div className="flex flex-col gap-1.5 border-t border-sos-card-border pt-3 text-xs text-sos-muted">
        <div className="flex items-center gap-1.5">
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{event.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formatDate(event.createdAt)}</span>
          </div>
          <span className="font-medium text-sos-gold-light">
            {event.reporter}
          </span>
        </div>
      </div>
    </article>
  );
}