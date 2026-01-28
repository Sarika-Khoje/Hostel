export default function ReportIssue() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          Report an Issue
        </h2>

        <form className="space-y-4">
          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Select category</option>
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
            <select className="w-full border rounded px-3 py-2">
              <option>Select priority</option>
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
            ></textarea>
          </div>

          {/* Visibility */}
          <div>
            <label className="block font-medium mb-1">Visibility</label>
            <select className="w-full border rounded px-3 py-2">
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
