'use client';

import { useUser } from "@clerk/nextjs";
import InfoCard from "./_components/InfoCard";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { getTableColumns, sql, eq, desc } from "drizzle-orm";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Dashboard = () => {
    const { user } = useUser();


    const [BudgetList, setBudgetList] = useState([]);

    useEffect(() => {
        getBudgetList();
    }, [user])


    const getBudgetList = async () => {
        try {
            const result = await db.select({
                ...getTableColumns(Budgets), totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
                totalItem: sql`count(${Expenses.id})`.mapWith(Number)
            }).from(Budgets).leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress!)).groupBy(Budgets.id).orderBy(desc(Budgets.id));

            if (result) {
                setBudgetList(result as []);
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_BUDGET_LIST', error);
        }
    }

    return (
        <div className="p-10">
            <h2 className="font-bold text-3xl">Hi, {user?.fullName} <span className="animate-bounce">👋</span></h2>
            <p className="text-gray-500">Here&apos;s what happening with your money, Let&apos;s manage your Expense</p>
            <InfoCard data={BudgetList} />
        </div>
    )
}
export default Dashboard;