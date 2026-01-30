import { useEffect, useState } from "react";

export default function AdminIssues() {
  const [issues, setIssues] = useState([]);
  const [remarks, setRemarks] = useState({});
  const [announcementText, setAnnouncementText] = useState("");

  // Load issues on page load
  useEffect(() => {
    const storedIssues =
      JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(storedIssues);
  }, []);

  // Update issue status
  const updateStatus = (id, newStatus) => {
    const updatedIssues = issues.map((issue) =>
      issue.id === id
        ? { ...issue, status: newStatus }
        : issue
    );

    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
  };

  // Save admin note for student
  const saveRemark = (id) => {
    const updatedIssues = issues.map((issue) =>
      issue.id === id
        ? {
            ...issue,
            adminRemark: remarks[id] || issue.adminRemark || "",
          }
        : issue
    );

    setIssues(updatedIssues);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
    alert("Admin note saved");
  };

  // Post announcement
  const postAnnouncement = () => {
    if (!announcementText.trim()) {
      alert("Announcement cannot be empty");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      message: announcementText,
      date: new Date().toLocaleString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("announcements")) || [];

    localStorage.setItem(
      "announcements",
      JSON.stringify([newAnnouncement, ...existing])
    );

    alert("Announcement posted successfully");
    setAnnouncementText("");
  };

  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Admin Panel
      </h2>

      {/* ================= ANNOUNCEMENT SECTION ================= */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold text-purple-700 mb-3">
          Make an Announcement
        </h3>

        <textarea
          value={announcementText}
          onChange={(e) => setAnnouncementText(e.target.value)}
          placeholder="Write announcement for students..."
          className="w-full border rounded px-3 py-2"
        />

        <button
          onClick={postAnnouncement}
          className="mt-3 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Post Announcement
        </button>
      </div>

      {/* ================= ISSUE MANAGEMENT ================= */}
      <h3 className="text-xl font-semibold text-purple-700 mb-4">
        Manage Reported Issues
      </h3>

      {issues.length === 0 && (
        <p className="text-gray-500">
          No issues reported yet.
        </p>
      )}

      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h4 className="text-lg font-semibold text-purple-700">
              {issue.category}
            </h4>

            <p className="text-gray-700 mt-1">
              {issue.description}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Priority: {issue.priority} | Reported by:{" "}
              {issue.reportedBy}
            </p>

            {/* Status dropdown */}
            <div className="mt-3">
              <label className="block text-sm font-medium mb-1">
                Status
              </label>
              <select
                value={issue.status}
                onChange={(e) =>
                  updateStatus(issue.id, e.target.value)
                }
                className="border rounded px-3 py-1"
              >
                <option>Reported</option>
                <option>Assigned</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Admin note */}
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Admin Note (visible to student)
              </label>
              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Add note for the student..."
                value={
                  remarks[issue.id] ||
                  issue.adminRemark ||
                  ""
                }
                onChange={(e) =>
                  setRemarks({
                    ...remarks,
                    [issue.id]: e.target.value,
                  })
                }
              />
            </div>

            <button
              onClick={() => saveRemark(issue.id)}
              className="mt-3 bg-purple-700 text-white px-4 py-1 rounded hover:bg-purple-800"
            >
              Save Note
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
