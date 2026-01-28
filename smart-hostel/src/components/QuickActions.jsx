export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <ul className="space-y-3 text-purple-700 font-medium">
        <li>
          •{" "}
          <a href="/report-issue" className="hover:underline">
            Report Issue
          </a>
        </li>
        <li>
          •{" "}
          <a href="/announcements" className="hover:underline">
            Announcement
          </a>
        </li>
        <li>
          •{" "}
          <a href="/lost-found" className="hover:underline">
            Lost and Found
          </a>
        </li>
      </ul>
    </div>
  );
}
