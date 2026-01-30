import { useEffect, useState } from "react";

export default function MyIssues() {
  const [myIssues, setMyIssues] = useState([]);

  useEffect(() => {
    const allIssues = JSON.parse(localStorage.getItem("issues")) || [];

    const filtered = allIssues.filter(
      (issue) => issue.reportedBy === "Sarika"
    );

    setMyIssues(filtered);
  }, []);

  const deleteIssue = (id) => {
    const allIssues = JSON.parse(localStorage.getItem("issues")) || [];

    const updatedIssues = allIssues.filter(
      (issue) => issue.id !== id
    );

    localStorage.setItem("issues", JSON.stringify(updatedIssues));

    setMyIssues(
      updatedIssues.filter(
        (issue) => issue.reportedBy === "Sarika"
      )
    );

    alert("Issue deleted successfully");
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

            {/* Status + Delete (NO background) */}
            <div className="mt-4 flex items-center gap-6">
              <span className="text-sm font-medium text-gray-600">
                {issue.status}
              </span>

              <button
                onClick={() => deleteIssue(issue.id)}
                className="text-sm font-medium text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
