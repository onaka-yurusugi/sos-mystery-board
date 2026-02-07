"use client";

import { useState } from "react";
import type {
  MysteryEventCategory,
  CreateMysteryEventInput,
} from "@/app/types/event";

const CATEGORIES: { value: MysteryEventCategory; label: string }[] = [
  { value: "UFO", label: "UFO" },
  { value: "幽霊", label: "幽霊" },
  { value: "超能力", label: "超能力" },
  { value: "その他", label: "その他" },
];

type FormErrors = Partial<Record<keyof CreateMysteryEventInput, string>>;

const INITIAL_FORM: CreateMysteryEventInput = {
  title: "",
  description: "",
  category: "UFO",
  location: "",
  reporter: "",
};

export default function SubmitPage() {
  const [form, setForm] = useState<CreateMysteryEventInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!form.title.trim()) newErrors.title = "タイトルは必須です";
    if (!form.description.trim()) newErrors.description = "説明は必須です";
    if (!form.category) newErrors.category = "カテゴリは必須です";
    if (!form.location.trim()) newErrors.location = "場所は必須です";
    if (!form.reporter.trim()) newErrors.reporter = "報告者名は必須です";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof CreateMysteryEventInput]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof CreateMysteryEventInput];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitResult(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data: { error?: string } = await res.json();
        throw new Error(data.error ?? "投稿に失敗しました");
      }

      setSubmitResult({
        type: "success",
        message: "不思議イベントが正常に投稿されました！",
      });
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (err) {
      setSubmitResult({
        type: "error",
        message:
          err instanceof Error ? err.message : "予期しないエラーが発生しました",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative px-4 py-16 sm:px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-sos-purple/30 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-sos-accent/10 blur-[100px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="animate-fade-in mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sos-accent">
            Report a Mystery
          </p>
          <h1 className="animate-fade-in text-3xl font-bold text-sos-text sm:text-4xl">
            不思議イベント投稿
          </h1>
          <p className="animate-fade-in-delay mt-3 text-sos-muted">
            あなたが目撃した不思議な現象をSOS団に報告してください
          </p>
        </div>

        {/* Result message */}
        {submitResult && (
          <div
            className={`mb-6 rounded-xl border p-4 text-center text-sm font-medium ${
              submitResult.type === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            }`}
          >
            {submitResult.message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-in-delay rounded-2xl border border-sos-card-border bg-sos-card/50 p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-sos-text"
              >
                タイトル <span className="text-sos-accent">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="例: 北高の校庭でUFOを目撃"
                className={`w-full rounded-lg border bg-sos-dark/60 px-4 py-3 text-sm text-sos-text placeholder-sos-muted/50 outline-none transition-colors focus:border-sos-accent focus:ring-1 focus:ring-sos-accent ${
                  errors.title
                    ? "border-red-500/60"
                    : "border-sos-card-border"
                }`}
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-400">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-sos-text"
              >
                詳細説明 <span className="text-sos-accent">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="目撃した不思議現象の詳細を記述してください..."
                className={`w-full rounded-lg border bg-sos-dark/60 px-4 py-3 text-sm text-sos-text placeholder-sos-muted/50 outline-none transition-colors focus:border-sos-accent focus:ring-1 focus:ring-sos-accent resize-y ${
                  errors.description
                    ? "border-red-500/60"
                    : "border-sos-card-border"
                }`}
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-sos-text"
              >
                カテゴリ <span className="text-sos-accent">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-sos-dark/60 px-4 py-3 text-sm text-sos-text outline-none transition-colors focus:border-sos-accent focus:ring-1 focus:ring-sos-accent ${
                  errors.category
                    ? "border-red-500/60"
                    : "border-sos-card-border"
                }`}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-xs text-red-400">{errors.category}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-sos-text"
              >
                場所 <span className="text-sos-accent">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="例: 西宮市北高校周辺"
                className={`w-full rounded-lg border bg-sos-dark/60 px-4 py-3 text-sm text-sos-text placeholder-sos-muted/50 outline-none transition-colors focus:border-sos-accent focus:ring-1 focus:ring-sos-accent ${
                  errors.location
                    ? "border-red-500/60"
                    : "border-sos-card-border"
                }`}
              />
              {errors.location && (
                <p className="mt-1 text-xs text-red-400">{errors.location}</p>
              )}
            </div>

            {/* Reporter */}
            <div>
              <label
                htmlFor="reporter"
                className="mb-2 block text-sm font-medium text-sos-text"
              >
                報告者 <span className="text-sos-accent">*</span>
              </label>
              <input
                type="text"
                id="reporter"
                name="reporter"
                value={form.reporter}
                onChange={handleChange}
                placeholder="例: キョン"
                className={`w-full rounded-lg border bg-sos-dark/60 px-4 py-3 text-sm text-sos-text placeholder-sos-muted/50 outline-none transition-colors focus:border-sos-accent focus:ring-1 focus:ring-sos-accent ${
                  errors.reporter
                    ? "border-red-500/60"
                    : "border-sos-card-border"
                }`}
              />
              {errors.reporter && (
                <p className="mt-1 text-xs text-red-400">{errors.reporter}</p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-linear-to-r from-sos-accent to-sos-amber px-6 py-3 text-base font-bold text-sos-dark shadow-lg shadow-sos-accent/20 transition-all hover:scale-[1.02] hover:shadow-sos-accent/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  送信中...
                </span>
              ) : (
                "不思議イベントを投稿する"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}