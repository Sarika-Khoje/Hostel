export default function Announcements() {
  // Temporary static data (later from backend)
  const announcements = [
    {
      id: 1,
      title: "Water Supply Maintenance",
      message:
        "Water supply will be unavailable from 10 AM to 2 PM due to maintenance work.",
      date: "28 Jan 2026",
    },
    {
      id: 2,
      title: "Pest Control Drive",
      message:
        "Pest control will be conducted in Block A and B on Friday.",
      date: "26 Jan 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Announcements
      </h2>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2">{item.message}</p>
            <p className="text-sm text-gray-500 mt-3">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
