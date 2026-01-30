import { useState } from "react";

export default function ReportIssue() {
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [visibility, setVisibility] = useState("Public");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      id: Date.now(),
      category,
      priority,
      description,
      visibility,
      status: "Reported",
      reportedBy: "Sarika", // temporary user
      date: new Date().toLocaleString(),
    };

    const existingIssues =
      JSON.parse(localStorage.getItem("issues")) || [];

    localStorage.setItem(
      "issues",
      JSON.stringify([newIssue, ...existingIssues])
    );

    alert("Issue reported successfully");

    // reset form
    setCategory("");
    setPriority("");
    setVisibility("Public");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Report an Issue
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Cleanliness</option>
              <option>Internet</option>
              <option>Furniture</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block font-medium mb-1">Priority</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select priority</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Emergency</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              rows="4"
              className="w-full border rounded px-3 py-2"
              placeholder="Describe the issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Visibility */}
          <div>
            <label className="block font-medium mb-1">Visibility</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
}
