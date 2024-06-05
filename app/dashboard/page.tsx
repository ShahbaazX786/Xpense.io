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
                setBudgetList(result as []);
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
                setExpenseList(result as []);
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_EXPENSE_LIST', error);
        }
    }

    return (
        <div className="p-10">
            <h2 className="font-bold text-3xl">Hi, {user?.fullName} <span className="animate-bounce">👋</span></h2>
            <p className="text-gray-500">Here&apos;s what happening with your money, Let&apos;s manage your Expense</p>
            <InfoCard data={BudgetList} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
                <div className="md:col-span-2 mt-8 shadow-sm">
                    <BarCharts data={BudgetList} />
                    <h2 className="font-bold text-lg mt-10">Latest Expenses</h2>
                    <ExpenseListTable data={ExpenseList} refreshData={() => getBudgetList()} />
                </div>
                <div className="mt-8 h-full max-h-[500px] overflow-y-auto grid gap-5">
                    <h2 className="font-bold text-lg">Recent Budgets</h2>
                    {BudgetList.map((budget, index) => (
                        <BudgetCard key={index} budget={budget} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;