import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusBar from "../components/StatusBar";
import RecentIssues from "../components/RecentIssues";
import QuickActions from "../components/QuickActions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <StatusBar />
          <QuickActions />
          <RecentIssues />
        </div>
      </div>
    </div>
  );
}
