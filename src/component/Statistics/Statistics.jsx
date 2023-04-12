import React from "react";
import "./Statistics.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import HeaderDesign from '../HeaderDesign/HeaderDesign';


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
    <>
      <div className='header-design-div'><HeaderDesign></HeaderDesign></div>
      <div className="common-headline-div"><h1 className="blog-heading">Statistics</h1></div>
      <div className="chart">        
        <LineChart width={700} height={300} data={marksArray}>
          <Line stroke="teal" dataKey="mark"></Line>
          <XAxis dataKey="name" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </div>
    </>
  );
};

export default Statistics;