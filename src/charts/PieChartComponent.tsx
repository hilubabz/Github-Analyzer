import { Legend, Pie, PieChart } from "recharts";
import type { RepoType } from "../services/repository.type";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PieChartComponent({ data }: { data: RepoType[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  const getLanguageData = (repos: RepoType[]) => {
    const counts: Record<string, number> = {};

    repos.forEach((repo) => {
      const lang = repo.language || "Unknown";
      if (lang !== "Unknown") {
        counts[lang] = (counts[lang] || 0) + 1;
      }
    });

    const languages = Object.keys(counts);

    return languages.map((name, index) => {
      const value = counts[name];
      const hue = (index * 360) / languages.length;
      const fill = `hsl(${hue}, 70%, 50%)`;
      return { name, value, fill };
    });
  };
  const pieData = getLanguageData(data);

  return (
    <div className="bg-[var(--card)] text-[var(--text)] shadow-lg rounded-xl flex flex-col items-center justify-center pt-2 transition-all duration-500 ease-in-out">
      <div className="text-2xl font-semibold p-2" ref={ref}>
        Top Languages
      </div>
      {inView && (
        <PieChart
          style={{
            width: "100%",
            maxWidth: "400px",
            maxHeight: "50vh",
            aspectRatio: 1,
          }}
        >
          <Pie
            data={pieData}
            innerRadius="50%"
            outerRadius="100%"
            cornerRadius={0}
            paddingAngle={0}
            dataKey="value"
            nameKey="name"
          />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}
