'use client';

import { db } from "@/utils/dbConfig";
import DashboardHeader from "./_components/dashboardHeader";
import Sidenav from "./_components/sidenav";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        user && checkUserBudgets();
    }, [user]);

    const checkUserBudgets = async () => {
        const budgets = await db
            .select()
            .from(Budgets)
            .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress!));

        if (budgets?.length === 0) {
            router.replace('/dashboard/budgets');
        }
    }


    return (
        <div>
            <div className="fixed md:w-64 hidden md:block">
                <Sidenav />
            </div>
            <div className="md:ml-64">
                <DashboardHeader />
                {children}
            </div>
        </div>
    )
}
export default DashboardLayout;