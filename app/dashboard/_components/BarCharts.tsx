import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarCharts = ({ budgetList }: any) => {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <BarChart width={300} height={200}
                data={budgetList}>
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={'totalSpend'} stackId={'1'} stroke='#2563eb' fill='#4845d2' />
                <Bar dataKey={'amount'} stackId={'1'} stroke='#2563eb' fill='#c293f0' />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarCharts;