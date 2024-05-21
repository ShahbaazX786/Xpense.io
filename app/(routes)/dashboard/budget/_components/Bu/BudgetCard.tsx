
const BudgetCard = (budget: any) => {
    return (
        <div className="p-5 border rounded-lg hover:shadow-lg cursor-pointer">
            <div className="flex gap-2 items-center justify-center">
                <div className="flex gap-2 items-center">
                    <h2 className="text-2xl bg-slate-100 rounded-full px-4 p-3">{budget.icon}</h2>
                    <div>
                        <p className="font-bold">{budget.name}</p>
                        <p className="text-sm text-gray-600">{budget.totalItem}</p>
                    </div>
                </div>
                <p className="font-bold text-primary text-lg">${budget.amount}</p>
            </div>
            <div className="mt-5">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-base text-slate-800">Spent: ${budget.totalSpend ? budget.totalSpend : 0}</p>
                    <p className="text-base text-slate-800">Remaining: ${budget.amount - budget.totalSpend}</p>
                </div>
                <div className="w-full bg-slate-300 rounded-full">
                    <div className="w-1/4 bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default BudgetCard;