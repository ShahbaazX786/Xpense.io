import { UserButton } from "@clerk/nextjs";
import { Info, LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";

const Sidenav = () => {
    const Menu = [
        { id: 1, name: 'Dashboard', icon: LayoutGrid },
        { id: 2, name: 'Budget', icon: PiggyBank },
        { id: 3, name: 'Expenses', icon: ReceiptText },
        { id: 4, name: 'Upgrade', icon: ShieldCheck },
        { id: 5, name: 'About', icon: Info },
    ]
    return (
        <div className="h-screen p-5 border shadow-md">
            <Image src={'./logo.svg'} alt="logo" width={80} height={60} />
            <div className="mt-5">
                {Menu.map((item, index) => (
                    <span className="flex gap-2 p-5 items-center text-gray-600 font-medium rounded-md cursor-pointer hover:text-primary hover:bg-blue-200" key={item.id}><item.icon />{item.name}</span>
                ))}
            </div>
            <div className="fixed p-5 flex gap-2 bottom-10 items-center">
                <span>Profile</span>
                <UserButton />
            </div>
        </div>
    )
}
export default Sidenav;