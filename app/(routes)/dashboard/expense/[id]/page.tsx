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
import { Button } from "@/components/ui/button";
import { PenBox, Trash } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation";
import EditBudget from "./_components/EditBudget";

const Expense = ({ params }: any) => {

    const { user } = useUser();
    const router = useRouter();
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
    const deleteBudget = async () => {
        try {
            // this is done first to avoid foreign key constraints error issues.
            const deleteExpenseRes = await db.delete(Expenses).where(eq(Expenses.budgetId, params.id)).returning();
            if (deleteExpenseRes) {
                const deleteBudgetRes = await db.delete(Budgets).where(eq(Budgets.id, params.id)).returning();
                if (deleteBudgetRes) {
                    toast.success('Budgets deleted successfully');
                    router.replace('/dashboard/budget');
                }
            }
        } catch (error) {
            toast.error('Oops something went wrong');
            console.error('Error while deleting the selected budget', error);
        }
    }


    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold justify-between flex items-center">My Expenses
                <div className="flex gap-2 items-center">
                    <EditBudget budgetInfo={BudgetInfo} refreshData={() => getBudgetInfo()} />

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="flex gap-2" variant={"destructive"}><Trash />Delete Budget</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your selected Budget
                                    including all the added expenses from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteBudget()}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
                {BudgetInfo ? (<BudgetCard budget={BudgetInfo} />) : (<div className="w-full bg-slate-200 rounded-lg h-[8.5rem] animate-pulse"></div>)}
            </div>
            <AddExpense paramId={params.id} user={user} refreshData={() => getBudgetInfo()} />
            <div className="mt-4">
                <ExpenseListTable data={ExpenseList} refreshData={() => getBudgetInfo()} />
            </div>
        </div>
    )
}

export default Expense;