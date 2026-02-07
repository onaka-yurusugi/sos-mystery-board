import Link from "next/link";

const features = [
  {
    title: "不思議を報告",
    description:
      "宇宙人、未来人、超能力者に関する不思議な現象を発見したら、すぐに報告しましょう。SOS団が調査に乗り出します。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    title: "仲間と共有",
    description:
      "団員たちと情報を共有し、不思議な出来事についてディスカッション。みんなの知恵を結集しましょう。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "真相を解明",
    description:
      "集まった報告を分析し、不思議現象の真相に迫ります。SOS団の活動記録として永久に保存されます。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-sos-purple/30 blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-sos-accent/10 blur-[100px] animate-glow-pulse" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="animate-fade-in mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sos-accent">
            Spreading Excitement all Over the World with the SOS Brigade
          </p>
          <h1 className="animate-fade-in bg-linear-to-r from-sos-gold-light via-sos-amber to-sos-accent bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl">
            SOS団
            <br />
            不思議発見ボード
          </h1>
          <p className="animate-fade-in-delay mx-auto mt-6 max-w-2xl text-lg text-sos-muted sm:text-xl">
            世界を大いに盛り上げるための不思議現象報告システム
          </p>
          <div className="animate-fade-in-delay mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sos-accent to-sos-amber px-8 py-3 text-base font-bold text-sos-dark shadow-lg shadow-sos-accent/20 transition-all hover:scale-105 hover:shadow-sos-accent/40"
            >
              不思議を報告する
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-sos-card-border px-8 py-3 text-base font-medium text-sos-text transition-all hover:border-sos-accent/50 hover:text-sos-amber"
            >
              ダッシュボードを見る
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-sos-dark to-transparent" />
      </section>

      {/* About SOS Brigade Section */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="animate-fade-in mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sos-accent">
            About SOS Brigade
          </h2>
          <h3 className="animate-fade-in text-3xl font-bold text-sos-text sm:text-4xl">
            SOS団とは
          </h3>
          <div className="animate-fade-in-delay mx-auto mt-8 max-w-3xl rounded-2xl border border-sos-card-border bg-sos-card/50 p-8 backdrop-blur-sm sm:p-10">
            <p className="text-lg leading-relaxed text-sos-muted">
              「世界を大いに盛り上げるための涼宮ハルヒの団」&mdash;&mdash;通称SOS団。
              宇宙人、未来人、異世界人、超能力者を探し出して一緒に遊ぶことを目的とした団体です。
              この不思議発見ボードは、世界中から集まる不思議な現象の報告を一元管理し、
              SOS団の活動をさらに活性化させるために開発されました。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="animate-fade-in mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sos-accent">
              Features
            </h2>
            <h3 className="animate-fade-in text-3xl font-bold text-sos-text sm:text-4xl">
              主な機能
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-sos-card-border bg-sos-card/50 p-8 backdrop-blur-sm transition-all hover:border-sos-accent/40 hover:shadow-lg hover:shadow-sos-accent/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-sos-purple/60 p-3 text-sos-amber transition-colors group-hover:bg-sos-accent/20">
                  {feature.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold text-sos-text">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-sos-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl border border-sos-card-border bg-linear-to-b from-sos-card/80 to-sos-dark p-12">
            <h2 className="mb-4 text-3xl font-bold text-sos-text sm:text-4xl">
              不思議を見つけたら、今すぐ報告！
            </h2>
            <p className="mb-8 text-sos-muted">
              あなたの周りで起きた不思議な現象をSOS団に報告してください。団長が直々に調査に乗り出します。
            </p>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-sos-accent to-sos-amber px-10 py-4 text-lg font-bold text-sos-dark shadow-lg shadow-sos-accent/20 transition-all hover:scale-105 hover:shadow-sos-accent/40"
            >
              報告フォームへ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}