import { DarkModeToggleButton } from "@/app/_components/DarkModeToggleButton";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
    return (
        <div className="border-b shadow-sm p-5 flex justify-between gap-2">
            <div className="flex justify-center items-center">
                <Input placeholder="Search..." className="min-w-[60vw]" />
            </div>
            <div className="flex justify-center items-center gap-3">
                <DarkModeToggleButton />
            </div>
        </div>
    )
}
export default DashboardHeader;