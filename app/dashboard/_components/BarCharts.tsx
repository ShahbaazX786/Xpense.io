import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = ({ budgetList }: any) => {
    return (
        <>
            <h2 className='font-bold text-lg mb-6'>Recent Activity</h2>
            <div className='border rounded-lg p-5'>
                <ResponsiveContainer width={'90%'} height={300}>
                    <BarChart
                        data={budgetList}
                    >
                        <XAxis dataKey={'name'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={'totalSpent'} stackId={'a'} fill='#4845d2' />
                        <Bar dataKey={'amount'} stackId={'a'} fill='#c3c2ff' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default BarCharts;