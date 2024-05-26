import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import { toast } from "sonner";


const ExpenseListTable = ({ data, refreshData }: any) => {

    const deleteExpense = async (id: any) => {
        try {
            const result = await db.delete(Expenses).where(eq(Expenses.id, id)).returning();
            if (result) {
                toast.success('Expense deleted successfully');
                refreshData();
            }
        } catch (error) {
            toast.error('Oops! Something went wrong while deleting the expense');
        }
    }
    return (
        <div className="mt-4">
            <h2 className="font-bold text-lg mb-4">Latest Expenses</h2>
            <Table>
                <TableCaption >A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Expense Name</TableHead>
                        <TableHead>Expense Amount</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((expense: any, index: any) => (
                        <TableRow key={index}>
                            <TableCell>{expense.id}</TableCell>
                            <TableCell className="font-medium">{expense.name}</TableCell>
                            <TableCell>{expense.amount}</TableCell>
                            <TableCell>{expense.createdBy}</TableCell>
                            <TableCell className="text-right">{expense.createdAt}</TableCell>
                            <Button variant={"destructive"} size={"icon"} onClick={() => deleteExpense(expense.id)}><Trash /></Button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ExpenseListTable;