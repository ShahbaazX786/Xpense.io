'use client';

import { useUser } from "@clerk/nextjs";
import { CircleDollarSign, Home, Info, LayoutGrid, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserProfileCard from "./UserProfileCard";

const SideNav = () => {
    const { user } = useUser();
    const Menu = [
        { id: 1, name: 'Home', icon: Home, path: '/' },
        { id: 2, name: 'Dashboard', icon: LayoutGrid, path: '/dashboard' },
        { id: 3, name: 'Budget', icon: CircleDollarSign, path: '/dashboard/budget' },
        { id: 4, name: 'Expenses', icon: ReceiptText, path: '/dashboard/expenses' },
        { id: 5, name: 'Upgrade', icon: ShieldCheck, path: '/dashboard/upgrade' },
        { id: 6, name: 'About', icon: Info, path: '/dashboard/about' },
    ]

    const pathName = usePathname();
    return (
        <div className="h-screen p-5 border shadow-md flex flex-col justify-start items-stretch">
            <div className='flex justify-start items-center gap-2'>
                <Image
                    src={'/Logo.svg'}
                    alt='Logo'
                    width={50}
                    height={50} />
                <span className='font-bold text-2xl'>
                    Expense.io
                </span>
            </div>
            <div className="mt-5">
                {Menu.map((item, index) => (
                    <Link href={item.path} key={item.id}>
                        <span className={`flex gap-2 p-5 mb-2 items-center text-gray-600 font-medium rounded-md cursor-pointer hover:text-primary hover:bg-blue-100 ${pathName === item.path && 'text-primary bg-blue-100'}`}><item.icon />{item.name}</span>
                    </Link>
                ))}
            </div>
            <div className="mt-auto mb-0">
                <UserProfileCard />
            </div>
        </div >
    )
}
export default SideNav;