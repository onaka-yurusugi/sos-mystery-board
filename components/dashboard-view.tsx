"use client";

import { useState, useMemo } from "react";
import type { MysteryEventCategory, MysteryEvent } from "@/app/types/event";
import { CategoryFilter } from "./category-filter";
import { MysteryEventCard } from "./mystery-event-card";

type DashboardViewProps = {
  events: MysteryEvent[];
};

export function DashboardView({ events }: DashboardViewProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<MysteryEventCategory | null>(null);

  const filteredEvents = useMemo(() => {
    if (!selectedCategory) return events;
    return events.filter((event) => event.category === selectedCategory);
  }, [events, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const event of events) {
      counts[event.category] = (counts[event.category] ?? 0) + 1;
    }
    return counts;
  }, [events]);

  return (
    <div>
      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-sos-card-border bg-sos-card p-4">
          <p className="text-sm text-sos-muted">Total</p>
          <p className="mt-1 text-3xl font-bold text-sos-amber">
            {events.length}
          </p>
        </div>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <div
            key={category}
            className="rounded-xl border border-sos-card-border bg-sos-card p-4"
          >
            <p className="text-sm text-sos-muted">{category}</p>
            <p className="mt-1 text-3xl font-bold text-sos-text">{count}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="mb-6">
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-sos-muted">
        {filteredEvents.length} / {events.length} events
      </p>

      {/* Event grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <MysteryEventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-sos-card-border py-16">
          <p className="text-lg font-medium text-sos-muted">
            No events found
          </p>
          <p className="mt-1 text-sm text-sos-muted/60">
            Try changing the filter criteria
          </p>
        </div>
      )}
    </div>
  );
}