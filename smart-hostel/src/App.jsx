import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Announcements from "./pages/Announcements";
import LostFound from "./pages/LostFound";
import AdminIssues from "./pages/AdminIssues";
import AdminRoute from "./components/AdminRoute";
import MyIssues from "./pages/MyIssues";
import StudentRoute from "./components/StudentRoute";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/report-issue" element={<ReportIssue />} />
  <Route path="/announcements" element={<Announcements />} />
  <Route path="/lost-found" element={<LostFound />} />
  <Route path="/admin/issues" element={<AdminIssues />} />
  <Route path="/my-issues" element={<MyIssues />} />
  <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />

  <Route
  path="/admin/issues"
  element={
    <AdminRoute>
      <AdminIssues />
    </AdminRoute>
  }
/>
<Route
  path="/my-issues"
  element={
    <StudentRoute>
      <MyIssues />
    </StudentRoute>
  }
/>


</Routes>


  );
}

export default App;
