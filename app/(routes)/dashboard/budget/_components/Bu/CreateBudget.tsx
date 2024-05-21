'use client';

import React, { useState } from 'react'
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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';

const CreateBudget = ({ refreshData }: any) => {
    const { user } = useUser();

    const [BudgetName, setBudgetName] = useState('s');
    const [BudgetAmount, setBudgetAmount] = useState('s');
    const [Emoji, setEmoji] = useState('😃');
    const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

    const handleCreateBudget = async () => {
        try {
            const result = await db.insert(Budgets).values({
                name: BudgetName,
                amount: BudgetAmount,
                icon: Emoji,
                createdBy: user?.primaryEmailAddress?.emailAddress!
            }).returning({ insertedId: Budgets.id });

            if (result) {
                refreshData();
                toast.success('New Budget Created Sucessfully!');
            }
        } catch (error) {
            toast.error('Oops something went wrong while creating the budget.');
            console.error('ERROR_WHILE_DB_SAVE', error);
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-dashed border-2 cursor-pointer hover:shadow-md'>
                        <h2>+</h2>
                        <h2>Create New Budget</h2>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Budget?</DialogTitle>
                        <DialogDescription>
                            <div className='mt-5'>
                                <Button variant={'outline'} className='text-xl' onClick={() => setOpenEmojiDialog(!openEmojiDialog)}>{Emoji}</Button>
                                <div className='absolute z-10'>
                                    <EmojiPicker open={openEmojiDialog} onEmojiClick={(e) => { setEmoji(e.emoji); setOpenEmojiDialog(false) }} />
                                </div>
                                <div className='mt-2'>
                                    <p className='text-black font-medium my-1'>Budget Name:</p>
                                    <Input placeholder='e.g. SmartPhone' onChange={(e) => { setBudgetName(e.target.value) }} />
                                </div>
                                <div className='mt-2'>
                                    <p className='text-black font-medium my-1'>Budget Amount:</p>
                                    <Input placeholder='e.g. 20000$' onChange={(e) => { setBudgetAmount(e.target.value) }} />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button disabled={!(BudgetName && BudgetAmount)} className='mt-5 w-full' onClick={handleCreateBudget}>Create Budget</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateBudget;