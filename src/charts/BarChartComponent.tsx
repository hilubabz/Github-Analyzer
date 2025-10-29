import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  type BarProps,
} from "recharts";
import type { RepoType } from "../services/repository.type";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface DataType {
  name: string;
  value: number;
}
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarProps) => {
  const { fill, x, y, width, height } = props;

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};
const BarChartComponent = ({ repos }: { repos: RepoType[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  // console.log(repos)
  let data: DataType[] = [];
  repos.map((val, index) => {
    if (index <= 4) {
      data = [...data, { name: val.name, value: val.stargazers_count }];
    }
  });
  return (
    <div className="bg-[var(--card)] text-[var(--text)] rounded-xl shadow-xl p-5 transition-all duration-500 ease-in-out">
      <div className="text-2xl font-semibold p-2 text-center" ref={ref}>
        Most Starred Repositories
      </div>
      {inView && (
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "var(--text)" }} />
          <YAxis width="auto" tick={{ fill: "var(--text)" }} />
          <Bar
            dataKey="value"
            fill="#8884d8"
            shape={TriangleBar}
            label={{ position: "top" }}
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      )}
    </div>
  );
};

export default BarChartComponent;
