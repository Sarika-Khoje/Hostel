export default function AdminIssues() {
  const issues = [
    {
      id: 1,
      title: "Water leakage in bathroom",
      category: "Plumbing",
      priority: "High",
      location: "Block A - Room 102",
      status: "Reported",
    },
    {
      id: 2,
      title: "WiFi not working",
      category: "Internet",
      priority: "Medium",
      location: "Block C - Room 310",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Manage Issues
      </h2>

      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-purple-700">
                  {issue.title}
                </h3>
                <p className="text-gray-600">
                  {issue.category} | {issue.location}
                </p>
                <p className="text-sm text-gray-500">
                  Priority: {issue.priority}
                </p>
              </div>

              <select
                className="border rounded px-3 py-1"
                defaultValue={issue.status}
              >
                <option>Reported</option>
                <option>Assigned</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select>
            </div>

            <textarea
              placeholder="Add remarks..."
              className="w-full border rounded px-3 py-2 mt-4"
            ></textarea>

            <button className="mt-3 bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800">
              Save Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
