import React from 'react'
import { ResponsiveContainer, Treemap } from 'recharts';

const TreeCharts = ({ budgetList }: any) => {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <Treemap
                width={430}
                height={250}
                data={budgetList}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                fill="#8884d8"
            />
        </ResponsiveContainer>

    )
}

export default TreeCharts;