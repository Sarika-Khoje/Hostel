import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-purple-200 min-h-screen p-6 border-r border-gray-300">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-black rounded-full"></div>
        <span className="font-semibold">Student</span>
      </div>

      <ul className="space-y-4 text-purple-900 font-medium">
        <li>
          <Link to="#" className="hover:underline">
            My Profile
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:underline">
            My Reported Issues
          </Link>
        </li>

        <li>
          <Link to="/" className="hover:underline">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
