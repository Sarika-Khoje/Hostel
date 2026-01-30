import { useEffect, useState } from "react";

export default function MyIssues() {
  const [myIssues, setMyIssues] = useState([]);

  useEffect(() => {
    const allIssues =
      JSON.parse(localStorage.getItem("issues")) || [];

    const filtered = allIssues.filter(
      (issue) => issue.reportedBy === "Sarika" // same as ReportIssue.jsx
    );

    setMyIssues(filtered);
  }, []);

  const statusColor = (status) => {
    if (status === "Reported") return "bg-yellow-100 text-yellow-700";
    if (status === "In Progress") return "bg-blue-100 text-blue-700";
    if (status === "Resolved") return "bg-green-100 text-green-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        My Reported Issues
      </h2>

      {myIssues.length === 0 && (
        <p className="text-gray-500">No issues reported yet.</p>
      )}

      <div className="space-y-4">
        {myIssues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {issue.category}
            </h3>

            <p className="text-gray-700 mt-1">
              {issue.description}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Priority: {issue.priority} | Visibility: {issue.visibility}
            </p>

            <span
              className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium ${statusColor(
                issue.status
              )}`}
            >
              {issue.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
