import '../css/FilmsWatched.css';
import '../css/App.css';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";


function PieChartComponent({data}) {

    const COLORS = ['#1F363D', '#40798C', '#70A9A1', '#9EC1A3', "#CFE0C3"];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="genres-tooltip">
              <p> You've watched {payload[0].value} movies {"\n"} tagged {payload[0].name}. </p>
            </div>
          );
        }
      
        return null;
      };

    return (
        <ResponsiveContainer width="100%" height={310}>
            <PieChart>
            <Pie
                dataKey="value"
                data={data}
                innerRadius={50}
                outerRadius={155}
                fill="#8884d8"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );
  }

export default PieChartComponent; // "export default" keywords specify the main component of the file