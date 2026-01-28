export default function MyIssues() {
  const issues = [
    {
      id: 1,
      title: "Fan not working",
      category: "Electrical",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Bathroom leakage",
      category: "Plumbing",
      priority: "High",
      status: "Reported",
    },
  ];

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

      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-purple-700">
                {issue.title}
              </h3>
              <p className="text-gray-600">
                {issue.category} | Priority: {issue.priority}
              </p>
            </div>

            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${statusColor(
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
