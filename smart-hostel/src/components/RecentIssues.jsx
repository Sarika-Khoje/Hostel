import { useEffect, useState } from "react";

export default function RecentIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem("issues"));

    if (!storedIssues || storedIssues.length === 0) {
      const defaultIssue = [
        {
          id: 1,
          category: "Plumbing",
          description: "Water leakage in washroom",
          priority: "High",
          status: "Reported",
          visibility: "Public",
          reportedBy: "Admin",
        },
      ];

      localStorage.setItem("issues", JSON.stringify(defaultIssue));
      setIssues(defaultIssue);
    } else {
      setIssues(storedIssues);
    }
  }, []);

  const statusColor = (status) => {
    if (status === "Reported") return "bg-yellow-100 text-yellow-700";
    if (status === "In Progress") return "bg-blue-100 text-blue-700";
    if (status === "Resolved") return "bg-green-100 text-green-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Recent Issues</h2>

      {issues.length === 0 && (
        <p className="text-gray-500">No issues available.</p>
      )}

      <div className="space-y-3">
        {issues
          .filter((issue) => issue.visibility !== "Private")
          .map((issue) => (
            <div
              key={issue.id}
              className="bg-white border rounded-lg p-4 shadow"
            >
              <h3 className="font-semibold text-purple-700">
                {issue.category}
              </h3>

              <p className="text-gray-700 mt-1">
                {issue.description}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Priority: {issue.priority}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${statusColor(
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
