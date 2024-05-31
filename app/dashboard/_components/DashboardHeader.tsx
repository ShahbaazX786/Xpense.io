import { DarkModeToggleButton } from "@/app/_components/DarkModeToggleButton";

const DashboardHeader = () => {
    return (
        <div className="border-b shadow-sm p-5 flex justify-end gap-2">
            <DarkModeToggleButton />
        </div>
    )
}
export default DashboardHeader;