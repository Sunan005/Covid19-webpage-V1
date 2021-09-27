import { Grid } from '@mui/material';
import React from 'react';
import './Charts.css'
import { BarChart, Bar, Cell, XAxis, Tooltip, Legend, PieChart, Pie } from 'recharts';

export default function Charts(props) {

    const data = [
        {
          name: 'April',
          "Total case": 65153,
          "Total Recovered": 36473,
          amt: 2400,
        },
        {
          name: 'May',
          "Total case": 159792,
          "Total Recovered": 108564,
          amt: 2210,
        },
        {
          name: 'June',
          "Total case": 259301,
          "Total Recovered": 207698,
          amt: 2290,
        },
        {
          name: 'July',
          "Total case": 597287,
          "Total Recovered": 392139,
          amt: 2000,
        },
        {
          name: 'August ',
          "Total case": 1204729,
          "Total Recovered": 1021991,
          amt: 2181,
        },
        {
          name: 'September',
          "Total case": props.totalCase,
          "Total Recovered": props.totalRecovered,
          amt: 2500,
        },
    ];

    const data1 = [
        { name: 'People', value: 310 },
        { name: '1 เข็ม', value: 430 },
        { name: '2 เข็ม', value: 240},
        { name: '3 เข็ม', value: 20 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={8}>
              <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="Total Recovered" fill="#0088FE" />
              <Bar yAxisId="right" dataKey="Total case" fill="#ff1744   " />
              </BarChart>
            </Grid>

            <Grid item xs={12} md={4}>
              <PieChart width={400} height={300}>
                <Pie
                    data={data1}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
              </PieChart>
            </Grid>
          </Grid>
        </>
    )
}
