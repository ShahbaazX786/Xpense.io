'use client';

import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BudgetCard from "./BudgetCard";
import CreateBudget from "./CreateBudget";

const BudgetList = () => {

  const { user } = useUser();
  const skeletonArray = [1, 2, 3, 4, 5];

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
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateBudget refreshData={() =>  getBudgetList() } />
        {BudgetList.length > 0 ? BudgetList.map((budget, index) => (
          <BudgetCard budget={budget} key={index} />
        )) : skeletonArray.map((item, index) => (<div key={index} className="w-full bg-slate-200 rounded-lg h-[8.5rem] animate-pulse"></div>))}
      </div>
    </div>
  )
}
export default BudgetList;