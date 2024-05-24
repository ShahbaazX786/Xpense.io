'use client';

import React from 'react'
import BudgetList from './_components/Bu/BudgetList';
import { ArrowLeftCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Budgets = () => {

  const router = useRouter();

  const goToPrevious = () => {
    router.back();
  }

  return (
    <div className='p-10'>
      <Button onClick={goToPrevious} variant={'ghost'} size={'icon'} className='float-left mr-4'>
        <ArrowLeftCircle height={32} width={32} />
      </Button>
      <h2 className='font-bold text-3xl'>My Budgets</h2>
      <BudgetList />
    </div>
  )
}

export default Budgets;