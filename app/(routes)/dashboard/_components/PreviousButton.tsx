'use client';

import { Button } from '@/components/ui/button'
import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const PreviousButton = () => {

    const router = useRouter();

    const goToPrevious = () => {
        router.back();
    }
    return (
        <div>
            <Button onClick={goToPrevious} variant={'ghost'} size={'icon'} className='float-left mr-4'>
                <ArrowLeftCircle height={32} width={32} />
            </Button>
        </div>
    )
}

export default PreviousButton;