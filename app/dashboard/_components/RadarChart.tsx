import React from 'react'
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const RadarChart = ({ budgetList }: any) => {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <RadarChart outerRadius={90} width={730} height={250} data={budgetList}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChart;