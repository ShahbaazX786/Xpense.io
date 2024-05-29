import { DarkModeToggleButton } from "@/app/_components/DarkModeToggleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const DashboardHeader = () => {
    return (
        <div className="border-b shadow-sm p-5 flex justify-between gap-2">
            <div className="flex justify-center items-center">
                <Input placeholder="Search..." className="min-w-[60vw]" />
                <Button variant={'ghost'} size={'icon'} className="border">
                    <Search />
                </Button>
            </div>
            <div className="flex justify-center items-center gap-3">
                <DarkModeToggleButton />
            </div>
        </div>
    )
}
export default DashboardHeader;