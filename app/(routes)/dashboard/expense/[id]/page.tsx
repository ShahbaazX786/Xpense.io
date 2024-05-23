'use client';

import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq, sql, getTableColumns, desc } from "drizzle-orm";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BudgetCard from "../../budget/_components/Bu/BudgetCard";
import AddExpense from "./_components/AddExpense";
import ExpenseListTable from "./_components/ExpenseListTable";

const Expense = ({ params }: any) => {

    const { user } = useUser();
    const [BudgetInfo, setBudgetInfo] = useState({});
    const [ExpenseList, setExpenseList] = useState([]);

    useEffect(() => {
        user && getBudgetInfo();
    }, [user])


    const getBudgetInfo = async () => {
        try {
            const result = await db.select({
                ...getTableColumns(Budgets), totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
                totalItem: sql`count(${Expenses.id})`.mapWith(Number)
            }).from(Budgets).leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress!)).having(eq(Budgets.id, params.id)).groupBy(Budgets.id);

            if (result) {
                setBudgetInfo(result[0]);
            }
            getExpenseList();
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_BUDGET_LIST', error);
        }
    }

    const getExpenseList = async () => {
        try {
            const result = await db.select().from(Expenses).where(eq(Expenses.id, params.id)).orderBy(desc(Expenses.id));

            if (result) {
                setExpenseList(result as []);
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_BUDGET_LIST', error);
        }
    }

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">My Expenses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
                {BudgetInfo ? (<BudgetCard budget={BudgetInfo} />) : (<div className="w-full bg-slate-200 rounded-lg h-[8.5rem] animate-pulse"></div>)}
            </div>
            <AddExpense paramId={params.id} user={user} refreshData={() => getBudgetInfo()} />
            <div className="mt-4">
                <h2 className="font-bold text-lg">Latest Expenses</h2>
                <ExpenseListTable data={ExpenseList} refreshData={() => getBudgetInfo()} />
            </div>
        </div>
    )
}

export default Expense;