import React from "react";
import { FaFingerprint } from "react-icons/fa";

export default function MyAttendance() {
  const attendanceData = [
    {
      date: "2025-11-02",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      location: "Tech Park, Sector 18",
      hours: "9h 00m",
      status: "Present",
    },
    {
      date: "2025-11-01",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      location: "Tech Park, Sector 18",
      hours: "9h 00m",
      status: "Present",
    },
    {
      date: "2025-10-31",
      checkIn: "09:15 AM",
      checkOut: "06:00 PM",
      location: "Tech Park, Sector 18",
      hours: "8h 45m",
      status: "Late",
    },
    {
      date: "2025-10-30",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      location: "Tech Park, Sector 18",
      hours: "9h 00m",
      status: "Present",
    },
    {
      date: "2025-10-29",
      checkIn: "-",
      checkOut: "-",
      location: "-",
      hours: "0h 00m",
      status: "Absent",
    },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Present":
        return "bg-green-100 text-green-700";
      case "Late":
        return "bg-yellow-100 text-yellow-700";
      case "Absent":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">

      {/* Mark Attendance Box */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-slate-800">
            Mark Today's Attendance
          </h1>
          <p className="text-sm text-slate-500">
            Use fingerprint authentication to mark your attendance
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <FaFingerprint className="text-3xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Mark Present
              </h3>
              <p className="text-sm text-slate-500">
                Click to authenticate with fingerprint
              </p>
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-7 py-3 rounded-lg transition w-full md:w-auto">
            Mark Present
          </button>
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white border rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-slate-800">
            Attendance History
          </h3>
          <p className="text-sm text-slate-500">
            View your complete attendance records
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-slate-600">
                <th className="px-6 py-3 font-semibold">Date</th>
                <th className="px-6 py-3 font-semibold">Check In</th>
                <th className="px-6 py-3 font-semibold">Check Out</th>
                <th className="px-6 py-3 font-semibold">Location</th>
                <th className="px-6 py-3 font-semibold">Working Hours</th>
                <th className="px-6 py-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendanceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-slate-800">
                    {row.date}
                  </td>
                  <td className="px-6 py-3">{row.checkIn}</td>
                  <td className="px-6 py-3">{row.checkOut}</td>
                  <td className="px-6 py-3">{row.location}</td>
                  <td className="px-6 py-3">{row.hours}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}
