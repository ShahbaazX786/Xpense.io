'use client';

import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BudgetCard from "./(routes)/budget/_components/Bu/BudgetCard";
import ExpenseListTable from "./(routes)/expense/[id]/_components/ExpenseListTable";
import BarCharts from "./_components/BarCharts";
import InfoCard from "./_components/InfoCard";

const Dashboard = () => {
    const { user } = useUser();
    const [BudgetList, setBudgetList] = useState([]);
    const [ExpenseList, setExpenseList] = useState([]);

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
        getExpenseList();
    }

    const getExpenseList = async () => {
        try {
            const result = await db.select({
                id: Expenses.id,
                name: Expenses.name,
                amount: Expenses.amount,
                createdAt: Expenses.createdAt
            }).from(Budgets).rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress!)).orderBy(desc(Budgets.id));

            if (result && result.length > 0) {
                setExpenseList(result as any);
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_EXPENSE_LIST', error);
        }
    }

    return (
        <div className="p-10 w-full">
            <h2 className="font-bold text-3xl">Hi, {user?.fullName} <span className="animate-bounce">👋</span></h2>
            <p className="text-gray-500">Here&apos;s what happening with your money, Let&apos;s manage your Expense</p>
            <InfoCard data={BudgetList} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
                <div className="md:col-span-3 xl:col-span-2 mt-8 shadow-sm border p-8 rounded-md">
                    <h2 className='font-bold text-lg mb-6'>Recent Activity</h2>
                    <BarCharts budgetList={BudgetList} />
                </div>
                <div className="md:col-span-3 xl:col-span-1 shadow-sm border px-4 py-4 rounded-md mt-8 h-auto overflow-y-auto grid">
                    <h2 className="font-bold text-lg">Recent Budgets</h2>
                    <div className="flex flex-col gap-4 h-full overflow-y-auto overflow-x-hidden">
                        {BudgetList.map((budget, index) => (
                            <BudgetCard key={index} budget={budget} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="border p-8 mt-4 shadow-lg rounded-md">
                <h2 className="font-bold text-lg">Latest Expenses</h2>
                <ExpenseListTable data={ExpenseList} refreshData={() => getBudgetList()} />
            </div>
        </div>
    )
}
export default Dashboard;