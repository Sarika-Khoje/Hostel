export default function LostFound() {
  // Temporary data (later from backend)
  const items = [
    {
      id: 1,
      title: "Black Wallet",
      status: "Lost",
      location: "Block B - Room 203",
      date: "27 Jan 2026",
    },
    {
      id: 2,
      title: "College ID Card",
      status: "Found",
      location: "Hostel Canteen",
      date: "26 Jan 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Lost & Found
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-purple-700">
                {item.title}
              </h3>
              <p className="text-gray-600">
                Location: {item.location}
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>

            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                item.status === "Lost"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
