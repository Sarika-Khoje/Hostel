import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusBar from "../components/StatusBar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "40px", width: "100%" }}>
          <StatusBar />
          <h1>Dashboard Loaded ✅</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
