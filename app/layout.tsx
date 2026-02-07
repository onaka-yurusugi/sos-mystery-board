import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOS団 不思議発見ボード",
  description: "世界を大いに盛り上げるための不思議現象報告システム",
};

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/dashboard", label: "ダッシュボード" },
  { href: "/submit", label: "投稿" },
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="sticky top-0 z-50 border-b border-sos-card-border/50 bg-sos-dark/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="text-lg font-bold tracking-wider text-sos-amber sm:text-xl"
            >
              SOS団
            </Link>
            <ul className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-sos-text transition-colors hover:bg-sos-purple/60 hover:text-sos-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-sos-card-border/50 bg-sos-dark/60">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-sos-muted sm:px-6">
            &copy; SOS Brigade
          </div>
        </footer>
      </body>
    </html>
  );
}
