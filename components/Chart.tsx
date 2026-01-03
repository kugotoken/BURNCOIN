import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { DistributionData } from '../types';

interface Props {
  data: DistributionData[];
}

// Expanded color palette for more segments
const COLORS = [
  '#F3BA2F', // Gold
  '#FFD700', // Gold Bright
  '#D4A017', // Metallic Gold
  '#B8860B', // Dark Goldenrod
  '#CD853F', // Peru
  '#8B4513', // Saddle Brown
  '#3d3d3d'  // Dark Gray
];

export const AllocationChart: React.FC<Props> = ({ data }) => {
  const chartData = data.map(d => ({ name: d.name, value: d.value, ...d }));

  return (
    <div className="h-full w-full min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(5, 5, 5, 0.9)', 
              borderColor: 'rgba(243, 186, 47, 0.2)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              color: '#F3BA2F',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
            itemStyle={{ color: '#fff', fontSize: '12px' }}
            formatter={(value: number) => [`${value}%`, '']}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};