import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/utils/dbConfig"
import { Budgets, Expenses } from "@/utils/schema"
import { useState } from "react"
import { toast } from "sonner"

const AddExpense = ({ paramId, user, refreshData }: any) => {

    const [name, setName] = useState('Name')
    const [amount, setAmount] = useState(0)

    const addNewExpense = async () => {
        try {
            const result = await db.insert(Expenses).values({
                name: name,
                amount: amount,
                budgetId: paramId!,
                createdAt: user?.primaryEmailAddress?.emailAddress!
            }).returning({ insertedId: Budgets.id })

            if (result) {
                refreshData();
                toast.success('Expense Added Successfully');
            }
        } catch (error) {
            toast.error('Error while Adding New Expense');
        }

    }

    return (
        <div className="border p-5 rounded-lg">
            <h2 className="font-bold text-lg">Add Expense</h2>
            <div className='mt-2'>
                <p className='text-black font-medium my-1'>Expense Name:</p>
                <Input placeholder='e.g. Furniture' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='mt-2'>
                <p className='text-black font-medium my-1'>Expense Amount:</p>
                <Input placeholder='e.g. 5000$' onChange={(e) => { setAmount(parseInt(e.target.value)) }} />
            </div>
            <Button disabled={!(name && amount)} className="mt-3 w-full" onClick={addNewExpense}>Add New Expense</Button>
        </div>
    )
}

export default AddExpense;