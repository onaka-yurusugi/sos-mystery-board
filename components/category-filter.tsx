"use client";

import type { MysteryEventCategory } from "@/app/types/event";

const CATEGORIES: MysteryEventCategory[] = ["UFO", "幽霊", "超能力", "その他"];

const CATEGORY_BADGE_COLORS: Record<MysteryEventCategory, string> = {
  UFO: "bg-green-600/20 text-green-300 border-green-500/30",
  "幽霊": "bg-purple-600/20 text-purple-300 border-purple-500/30",
  "超能力": "bg-pink-600/20 text-pink-300 border-pink-500/30",
  "その他": "bg-gray-600/20 text-gray-300 border-gray-500/30",
};

type CategoryFilterProps = {
  selected: MysteryEventCategory | null;
  onSelect: (category: MysteryEventCategory | null) => void;
};

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          selected === null
            ? "border-sos-amber bg-sos-amber/20 text-sos-amber"
            : "border-sos-card-border bg-sos-card text-sos-muted hover:border-sos-amber/50 hover:text-sos-text"
        }`}
      >
        ALL
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category === selected ? null : category)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            selected === category
              ? CATEGORY_BADGE_COLORS[category]
              : "border-sos-card-border bg-sos-card text-sos-muted hover:border-sos-amber/50 hover:text-sos-text"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
