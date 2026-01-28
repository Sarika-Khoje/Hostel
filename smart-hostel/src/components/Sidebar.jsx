import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-64 bg-purple-100 shadow p-6">

      <h3 className="font-bold text-purple-700 mb-4">My Profile</h3>

      <ul className="space-y-3">
        <li>
  <Link to="/my-issues" className="text-purple-700">
    My Reported Issues
  </Link>
</li>

        <li
          onClick={logout}
          className="text-red-600 cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
