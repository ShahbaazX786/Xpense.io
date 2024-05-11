import DashboardHeader from "./_components/dashboardHeader";
import Sidenav from "./_components/sidenav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="fixed md:w-64 hidden md:block">
                <Sidenav />
            </div>
            <div className="md:ml-64">
                <DashboardHeader />
                {children}
            </div>
        </div>
    )
}
export default DashboardLayout;