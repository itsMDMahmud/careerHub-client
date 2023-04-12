import React from "react";
import "./Statistics.css";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import HeaderDesign from '../HeaderDesign/HeaderDesign';


const Statistics = () => {
  const valuesArray = [
    { id: 1, name: "Assignment-1", value: 60 },
    { id: 1, name: "Assignment-2", value: 56 },
    { id: 1, name: "Assignment-3", value: 59 },
    { id: 1, name: "Assignment-4", value: 59 },
    { id: 1, name: "Assignment-5", value: 60 },
    { id: 1, name: "Assignment-6", value: 45 },
    { id: 1, name: "Assignment-7", value: 60 },
    { id: 1, name: "Assignment-8", value: 60 },
  ];

  

  return (
    <>
      <div className='header-design-div'><HeaderDesign></HeaderDesign></div>
      <div className="common-headline-div"><h1 className="blog-heading">Statistics</h1></div>
      <div className="chart">        
        
                
        <PieChart 
        width={400}
        height={400}
        ><Pie
          dataKey="value"
          isAnimationActive={false}
          data={valuesArray}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#16a085"
          label
          ></Pie>          
          <Tooltip></Tooltip>
        </PieChart>


      </div>
    </>
  );
};

export default Statistics;