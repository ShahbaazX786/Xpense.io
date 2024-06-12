'use client';

import React, { useEffect, useState } from 'react'
import BarCharts from '../../_components/BarCharts';
import { Budgets, Expenses } from '@/utils/schema';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '@/utils/dbConfig';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import AreaCharts from '../../_components/AreaCharts';
import RadialCharts from '../../_components/RadialCharts';
import GridItem from '../../_components/GridItem';
import PreviousButton from '../../_components/PreviousButton';
import RadarChart from '../../_components/RadarChart';

const Analytics = () => {
    const { user } = useUser();
    const [BudgetList, setBudgetList] = useState([]);

    useEffect(() => {
        getBudgetList();
    }, [user]);

    const getBudgetList = async () => {
        try {
            const result = await db.select({
                ...getTableColumns(Budgets), totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
                totalItem: sql`count(${Expenses.id})`.mapWith(Number)
            }).from(Budgets).leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress!)).groupBy(Budgets.id).orderBy(desc(Budgets.id));

            if (result && result.length > 0) {
                setBudgetList(result as any);
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_BUDGET_LIST', error);
        }
    }

    return (
        <div className='container'>
            <PreviousButton />
            <h2 className=' text-center font-bold text-3xl my-4'>Analytics</h2>
            <div className='flex flex-col min-h-screen items-start justify-start px-2 md:px-4 xl:px-8 py-10'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 w-full gap-10'>
                    <GridItem title={"Bar Chart"}>
                        <BarCharts budgetList={BudgetList} />
                    </GridItem>
                    <GridItem title={"Bar Chart"}>
                        <AreaCharts budgetList={BudgetList} />
                    </GridItem>
                    <GridItem title={"Bar Chart"}>
                        <RadialCharts budgetList={BudgetList} />
                    </GridItem>
                    <GridItem title={"Bar Chart"}>
                        <RadarChart budgetList={BudgetList} />
                    </GridItem>
                    <GridItem title={"Bar Chart"}>
                        <BarCharts budgetList={BudgetList} />
                    </GridItem>
                    <GridItem title={"Bar Chart"}>
                        <BarCharts budgetList={BudgetList} />
                    </GridItem>
                </div>
            </div>
        </div>
    )
}

export default Analytics;