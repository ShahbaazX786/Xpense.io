'use client';

import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ExpenseListTable from "./[id]/_components/ExpenseListTable";

const ExpenseComponent = () => {
    const { user } = useUser();
    const [ExpenseList, setExpenseList] = useState([]);


    useEffect(() => {
        getExpenseList();
    }, [user]);

    const getExpenseList = async () => {
        try {
            const result = await db.select({
                id: Expenses.id,
                name: Expenses.name,
                amount: Expenses.amount,
                createdAt: Expenses.createdAt
            }).from(Budgets).rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId)).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress!)).orderBy(desc(Budgets.id));

            if (result) {
                setExpenseList(result as []);
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('ERROR_WHILE_FETCHING_EXPENSE_LIST', error);
        }
    }

    return (
        <div className="container">
            <ExpenseListTable data={ExpenseList} refreshData={() => getExpenseList()} />
        </div>
    )
}

export default ExpenseComponent;