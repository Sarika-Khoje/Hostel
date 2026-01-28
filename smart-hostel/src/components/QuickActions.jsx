import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <ul className="space-y-3 text-purple-700 font-medium">
        <li>
          • <Link to="/report-issue" className="hover:underline">
            Report Issue
          </Link>
        </li>
        <li>
          • <Link to="/announcements" className="hover:underline">
            Announcement
    </Link>
        </li>
        <li>
          • <Link to="/lost-found" className="hover:underline">
            Lost and Found
  </Link>
        </li>
      </ul>
    </div>
  );
}
