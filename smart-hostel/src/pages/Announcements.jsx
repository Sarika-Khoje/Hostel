import { useEffect, useState } from "react";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("announcements");

    if (!stored) {
      const defaultAnnouncement = [
        {
          id: 1,
          title: "Pest Control Drive",
          message: "Pest control will be conducted in Block A and B on Friday.",
          date: "26 Jan 2026",
        },
      ];

      localStorage.setItem(
        "announcements",
        JSON.stringify(defaultAnnouncement)
      );
      setAnnouncements(defaultAnnouncement);
    } else {
      setAnnouncements(JSON.parse(stored));
    }
  }, []);

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
            <p className="text-gray-700 mt-2">
              {item.message}
            </p>
            <p className="text-sm text-gray-500 mt-3">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}