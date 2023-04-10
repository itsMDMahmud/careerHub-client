import React from "react";
import "./Statistics.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

const Statistics = () => {
  const marksArray = [
    {
      id: 1,
      name: "as-1",
      mark: 60,
    },
    {
      id: 1,
      name: "as-2",
      mark: 56,
    },
    {
      id: 1,
      name: "as-3",
      mark: 59,
    },
    {
      id: 1,
      name: "as-4",
      mark: 59,
    },
    {
      id: 1,
      name: "as-5",
      mark: 60,
    },
    {
      id: 1,
      name: "as-6",
      mark: 45,
    },
    {
      id: 1,
      name: "as-7",
      mark: 60,
    },
    {
      id: 1,
      name: "as-8",
      mark: 60,
    },
  ];

  return (
    <div>
      <LineChart width={500} height={300} data={marksArray}>
        <Line dataKey="mark"></Line>
      </LineChart>
    </div>
  );
};

export default Statistics;
