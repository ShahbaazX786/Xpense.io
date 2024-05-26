import React from 'react'
import PreviousButton from '../../_components/PreviousButton';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Upgrade = () => {

    const MembershipDetails = [
        {
            type: 'Starter',
            price: '0$',
            features: [
                'Data Encryption',
                'Add Budgets',
                'Add Expenses',
                'Utilize Dashboard',
                'Customer Support',
            ]
        },
        {
            type: 'Pro',
            price: '30$',
            features: [
                'Data Encryption',
                'Add Budgets',
                'Add Expenses',
                'Analytics Tab unlocked',
                'Dark Mode',
                'Savings Calculator',
            ]
        }
    ]

    return (
        <div className='p-10'>
            <PreviousButton />
            <h2 className='font-bold text-3xl'>Upgrade to Pro</h2>
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                    {MembershipDetails.map((plan, index) => (
                        <div key={index} className='text-center border ring-1 shadow-sm rounded-lg p-10 hover:scale-105 hover:ring-2 hover:bg-zinc-50 transition-all'>
                            <h2 className="text-lg font-medium text-gray-900">
                                {plan.type}
                                <span className="sr-only">Plan</span>
                            </h2>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{plan.price}</strong>
                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>

                            <ul className="mt-6 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <li className="flex items-center gap-1" key={index}>
                                        <CheckCircle className='text-green-500' />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant={index === 0 ? 'outline' : 'default'} size={'lg'} className='mt-8'>
                                <Link href={index === 0 ? '/dashboard' : '/dashboard/about'}>
                                    {index === 0 ? 'Continue Using Free' : 'Upgrade To Pro Now!'}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Upgrade;