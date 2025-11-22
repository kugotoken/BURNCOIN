import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Forge Pool (Locked)', value: 90, color: '#7c2d12' }, // Dark Orange/Brown
  { name: 'ICO Allocation', value: 9.5, color: '#ea580c' }, // Orange
  { name: 'Initial Liquidity', value: 0.5, color: '#fbbf24' }, // Gold
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-2 rounded shadow-lg text-xs border border-orange-500/30">
        <p className="text-white font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export const TokenomicsChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle"
            wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};