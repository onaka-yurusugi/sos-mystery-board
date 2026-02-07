import type { Metadata } from "next";
import { getEvents } from "@/app/lib/storage";
import { DashboardView } from "@/components/dashboard-view";

export const metadata: Metadata = {
  title: "ダッシュボード | SOS団 不思議発見ボード",
  description: "SOS団 不思議イベント一覧ダッシュボード",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const events = await getEvents();

  return (
    <div className="min-h-screen">
      <div className="border-b border-sos-card-border/50 bg-sos-navy/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-sos-text">
                不思議イベント管理
              </h1>
              <p className="mt-1 text-sm text-sos-muted">
                SOS団に報告された不思議現象の一覧
              </p>
            </div>
            <div className="rounded-lg border border-sos-accent/30 bg-sos-accent/10 px-3 py-1.5 text-xs font-bold tracking-wider text-sos-amber">
              SOS BRIGADE
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardView events={events} />
      </div>
    </div>
  );
}
