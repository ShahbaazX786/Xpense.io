import { CircleDollarSign, LucideWallet, ReceiptTextIcon } from "lucide-react";
import { useEffect, useState } from "react";

const InfoCard = ({ data }: any) => {

    const [TotalBudget, setTotalBudget] = useState(0);
    const [TotalSpent, setTotalSpent] = useState(0);

    useEffect(() => {
        data && CalculateCardInfo();
    }, [data])

    const CalculateCardInfo = () => {
        let totalBudget = 0;
        let totalSpent = 0;
        data.forEach((budget: { amount: any, totalSpend: number }) => {
            totalBudget = totalBudget + Number(budget.amount)
            totalSpent = totalSpent + budget.totalSpend;
        });

        setTotalBudget(totalBudget);
        setTotalSpent(totalSpent);
    }

    return (
        <div className="mt-8">
            {/* budget */}
            {
                data && data.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="border p-8 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md cursor-pointer">
                            <div>
                                <h2 className="text-sm">Total Budget</h2>
                                <p className="font-bold text-2xl">${TotalBudget}</p>
                            </div>
                            <CircleDollarSign className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
                        </div>

                        {/* spent */}
                        <div className="border p-8 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md cursor-pointer">
                            <div>
                                <h2 className="text-sm">Total Spent</h2>
                                <p className="font-bold text-2xl">${TotalSpent}</p>
                            </div>
                            <ReceiptTextIcon className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
                        </div>

                        {/* remaining */}
                        <div className="border p-8 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md cursor-pointer">
                            <div>
                                <h2 className="text-sm">Remaining</h2>
                                <p className="font-bold text-2xl">${TotalBudget - TotalSpent}</p>
                            </div>
                            <LucideWallet className="bg-primary p-3 h-12 w-12 rounded-full text-white" />
                        </div>
                    </div>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[1, 2, 3].map((res, index) => (<div key={index} className="min-h-32 w-full bg-slate-200 animate-pulse rounded-lg"></div>))}
                    </div>
            }
        </div>
    )
}

export default InfoCard;