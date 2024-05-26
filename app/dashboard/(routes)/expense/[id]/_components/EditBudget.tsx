'use client';

import { Button } from '@/components/ui/button';
import { PenBox } from 'lucide-react';
import React, { useEffect, useState } from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { toast } from 'sonner';

const EditBudget = ({ budgetInfo , refreshData}: any) => {

    const { user } = useUser();
    const [BudgetName, setBudgetName] = useState(budgetInfo.name);
    const [BudgetAmount, setBudgetAmount] = useState(budgetInfo.amount);
    const [Emoji, setEmoji] = useState('');
    const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

    useEffect(() => {
      if(budgetInfo){
          setEmoji(budgetInfo?.icon);
          setBudgetName(budgetInfo?.name);
          setBudgetAmount(budgetInfo?.amount);
      }
    
      return () => {
        null
      }
    }, [budgetInfo])
    

    const handleUpdateBudget = async () => {
        try {
            const result = await db.update(Budgets).set({
                name: BudgetName,
                amount: BudgetAmount,
                icon: Emoji,
            }).where(eq(Budgets.id, budgetInfo.id)).returning();

            if (result) {
                refreshData();
                toast.success('Budget updated successfully');
            }
        } catch (error) {
            toast.error('Something went wrong while updating budget');
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex gap-2"><PenBox />Edit</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Budget</DialogTitle>
                        <DialogDescription>
                            <div className='mt-5'>
                                <Button variant={'outline'} className='text-xl' onClick={() => setOpenEmojiDialog(!openEmojiDialog)}>{Emoji}</Button>
                                <div className='absolute z-10'>
                                    <EmojiPicker open={openEmojiDialog} onEmojiClick={(e) => { setEmoji(e.emoji); setOpenEmojiDialog(false) }} />
                                </div>
                                <div className='mt-2'>
                                    <p className='text-black font-medium my-1'>Budget Name:</p>
                                    <Input placeholder='e.g. SmartPhone' onChange={(e) => { setBudgetName(e.target.value) }} defaultValue={budgetInfo.name} />
                                </div>
                                <div className='mt-2'>
                                    <p className='text-black font-medium my-1'>Budget Amount:</p>
                                    <Input placeholder='e.g. 20000$' onChange={(e) => { setBudgetAmount(e.target.value) }} defaultValue={budgetInfo.amount} />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button disabled={!(BudgetName && BudgetAmount)} className='mt-5 w-full' onClick={() => handleUpdateBudget()}>Update Budget</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditBudget;