import { UserButton } from "@clerk/nextjs";

const DashboardHeader = () => {
    return (
        <div className="border-b shadow-sm p-5 flex justify-between">
            <div>Search</div>
            <div>
                <UserButton />
            </div>
        </div>
    )
}
export default DashboardHeader;