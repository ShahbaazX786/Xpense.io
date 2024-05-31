'use client';

import { Button } from '@/components/ui/button';
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const PreviousButton = () => {
    const router = useRouter();

    const goToPrevious = () => {
        router.push('/dashboard');
    }

    return (
        <div>
            <Button onClick={goToPrevious} variant={'outline'} size={'icon'} className='float-left mr-4'>
                <FaArrowLeft height={32} width={32}  />
            </Button>
        </div>
    )
}

export default PreviousButton;