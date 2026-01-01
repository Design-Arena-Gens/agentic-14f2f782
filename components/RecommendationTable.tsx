import clsx from "clsx";
import type { Recommendation } from "@/lib/recommendations";

type RecommendationTableProps = {
  items: Recommendation[];
};

export function RecommendationTable({ items }: RecommendationTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 shadow-xl backdrop-blur">
      <table className="min-w-full border-collapse text-left text-sm md:text-base">
        <thead className="bg-slate-900/70 text-slate-300">
          <tr>
            <th className="px-6 py-4 font-medium uppercase tracking-wide">
              Связка
            </th>
            <th className="px-6 py-4 font-medium uppercase tracking-wide">
              Экономия времени
            </th>
            <th className="px-6 py-4 font-medium uppercase tracking-wide">
              Сложность (1-10)
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.stack}
              className={clsx(
                "border-t border-slate-800 transition-colors",
                index % 2 === 0 ? "bg-slate-900/30" : "bg-slate-950/30",
                "hover:bg-slate-800/50"
              )}
            >
              <td className="px-6 py-4 text-slate-100">{item.stack}</td>
              <td className="px-6 py-4 text-sky-300">{item.timeSaving}</td>
              <td className="px-6 py-4 text-amber-300 font-semibold">
                {item.complexity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
