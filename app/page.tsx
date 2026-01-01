/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo, useState } from "react";
import { RecommendationTable } from "@/components/RecommendationTable";
import { generateRecommendations } from "@/lib/recommendations";

const EXAMPLE_INPUT =
  "1. Обрабатываю входящие заявки с лендинга и вручную заношу в AmoCRM.\n2. Пишу ответы клиентам на email и пересылаю менеджерам.\n3. Каждую пятницу готовлю отчет по рекламным кампаниям в Google Ads.";

export default function HomePage() {
  const [tasks, setTasks] = useState("");

  const recommendations = useMemo(
    () => generateRecommendations(tasks),
    [tasks]
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16 md:px-10">
      <section className="space-y-4 text-center md:space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
          AI Automation Advisor
        </span>
        <h1 className="text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">
          Автоматизируй рутину с помощью ИИ
        </h1>
        <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
          Опиши ежедневные процессы — сервис предложит оптимальные связки Zapier,
          Make и OpenAI для автоматизации. Получи оценку выгоды и сложности
          внедрения в одном клике.
        </p>
      </section>

      <section className="flex flex-col gap-4 md:flex-row md:items-end">
        <label className="flex-1">
          <span className="mb-2 block text-sm font-medium uppercase tracking-widest text-slate-300">
            Опиши рутину
          </span>
          <textarea
            className="h-48 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 text-sm text-slate-100 shadow-xl outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/60 md:text-base"
            placeholder="Например: Выписываю счета вручную, напоминаю менеджерам о просроченных задачах, формирую отчеты по маркетингу..."
            value={tasks}
            onChange={(event) => setTasks(event.target.value)}
          />
        </label>
        <div className="flex flex-col gap-3">
          <button
            className="rounded-xl border border-sky-500/40 bg-sky-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-lg transition hover:-translate-y-px hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 md:text-base"
            onClick={() => setTasks(EXAMPLE_INPUT)}
            type="button"
          >
            Загрузить пример
          </button>
          <button
            className="rounded-xl border border-slate-700/60 bg-slate-900/80 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-200 shadow-lg transition hover:-translate-y-px hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 md:text-base"
            onClick={() => setTasks("")}
            type="button"
          >
            Очистить
          </button>
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <h2 className="text-xl font-semibold uppercase tracking-widest text-slate-200 md:text-2xl">
            Рекомендованные связки
          </h2>
          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            {recommendations.length > 0 ? "Готово" : "Ожидание"}
          </span>
        </header>
        {recommendations.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 px-6 py-8 text-center text-sm text-slate-400 md:text-base">
            Введите задачи — и сервис предложит оптимальные варианты автоматизации
            в формате таблицы.
          </p>
        ) : (
          <RecommendationTable items={recommendations} />
        )}
      </section>

      <footer className="mt-auto flex flex-col gap-2 border-t border-slate-800/60 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} AI Automation Advisor.</span>
        <span>
          Предлагаемые связки — стартовая точка. Финальную архитектуру уточняем на
          внедрении.
        </span>
      </footer>
    </main>
  );
}
