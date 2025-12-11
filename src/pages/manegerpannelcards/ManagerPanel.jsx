
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  FaClipboardList,
  FaUserClock,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFingerprint,
  FaUser,
  FaChartLine,
  FaCheckCircle,
  FaTimesCircle,
  FaMapMarker,
  FaBars,
  FaIdCard,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

import Sidebar from "../../components/managerpanel/Sidebar"
import StatCard from "../../components/StatCard";
import TrackStatus from "../../components/TrackStatus";
import ActionButton from "../../components/ActionButton";

// Pages (nested)
import Attendance from "./Attendance";
import Fingerprint from "./Fingerprint";
import Location from "./Location ";
import Employees from "./Employees ";
import Reports from  "./Reports "
import Settings from "./manager/settings/Settings";
import PageNotFound from "../PageNotFound";

const steps = [
  { title: "Welcome to Manager Panel", step: "Step 1 of 5", description: "Track attendance, manage your team, and monitor employee locations in real-time.", tip: "Navigate using the sidebar menu or use keyboard shortcuts." },
  { title: "Attendance Tracking", step: "Step 2 of 5", description: "View daily attendance records. Mark employees as Present, Late, Absent, or Half Day with check-in/out times.", tip: "Filter attendance by date to review historical records." },
  { title: "Fingerprint Registration", step: "Step 3 of 5", description: "Register employee fingerprints for biometric attendance. Track registration status and manage devices.", tip: "" },
  { title: "Location Tracking", step: "Step 4 of 5", description: "Monitor employee locations in real-time. Ensure guards are at their assigned posts with GPS tracking.", tip: "Location tracking requires browser permission - grant it for accurate tracking." },
  { title: "Team Reports", step: "Step 5 of 5", description: "Access analytics and performance reports for your team. Identify trends and improve efficiency.", tip: "" },
];

export default function ManagerPanel() {
  const [stepIndex, setStepIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const nextStep = () => setStepIndex((p) => Math.min(p + 1, steps.length));
  const prevStep = () => setStepIndex((p) => Math.max(p - 1, 0));
  const skipTutorial = () => setStepIndex(steps.length);

  const pageTitles = {
    "/manager": "Dashboard",
    "/manager/attendance": "Attendance Management",
    "/manager/fingerprint": "Fingerprint Registration",
    "/manager/location": "Location Tracking",
    "/manager/employees": "Employee Management",
    "/manager/reports": "Reports & Analytics",
    "/manager/settings": "Settings",
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setProfileOpen(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  if (stepIndex < steps.length) {
    const current = steps[stepIndex];
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md w-full relative">
          <button onClick={skipTutorial} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">✕</button>

          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 rounded-xl text-2xl">
              {stepIndex === 0 && <FaClipboardList />}
              {stepIndex === 1 && <FaUserClock />}
              {stepIndex === 2 && <FaFingerprint />}
              {stepIndex === 3 && <FaMapMarkerAlt />}
              {stepIndex === 4 && <FaChartLine />}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{current.title}</h2>
              <p className="text-sm text-gray-500">{current.step}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{current.description}</p>

          <div className="flex justify-center mb-6 space-x-2">
            {steps.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i <= stepIndex ? "bg-blue-600" : "bg-gray-300"}`}></span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button onClick={skipTutorial} className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">Skip Tutorial</button>
            <div className="flex space-x-2">
              {stepIndex > 0 && (<button onClick={prevStep} className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium">Back</button>)}
              <button onClick={nextStep} className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900">{stepIndex === steps.length - 1 ? "Finish" : "Next"}</button>
            </div>
          </div>

          <div className="bg-blue-50 border rounded-lg p-3 mt-6 flex items-start space-x-2">
            <span className="text-yellow-500 text-lg">💡</span>
            <div>
              <p className="text-sm text-gray-700 font-semibold">Pro Tip</p>
              <p className="text-sm text-blue-600">{current.tip || "—"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-3 border-b bg-white relative">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-md text-gray-600" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{currentTitle}</h1>
              <p className="text-gray-500 text-sm">Welcome back, Manager</p>
            </div>
          </div>

          {/* CLICKABLE PROFILE */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center space-x-2 bg-white border rounded-md px-3 py-2 shadow-sm hover:bg-gray-100 transition"
            >
              <FaUser className="text-blue-700" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">Manager</p>
                <p className="text-xs text-gray-500">Department Head</p>
              </div>
              <FaChevronDown className="text-gray-500 text-xs" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white py-2 z-50">
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-100 transition">
                  <FaIdCard className="text-gray-600" />
                  My Profile
                </button>

                <hr className="my-0" />

                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition">
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="p-6 overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Present Today" value="0" color="bg-green-500" icon={<FaCheckCircle />} />
                    <StatCard title="Late Today" value="0" color="bg-yellow-500" icon={<FaUserClock />} />
                    <StatCard title="Absent Today" value="0" color="bg-red-500" icon={<FaUsers />} />
                    <StatCard title="Half Day" value="0" color="bg-blue-500" icon={<FaCalendarAlt />} />
                  </div>

                  <div className="bg-orange-50 border rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <h2 className="font-semibold text-gray-800">Location Tracking Status</h2>
                      <button className="text-blue-600 font-medium hover:underline">View All</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <TrackStatus color="text-green-600" label="Within Range (100m)" count="0" icon={<FaCheckCircle />} />
                      <TrackStatus color="text-red-600" label="Out of Range" count="0" icon={<FaTimesCircle />} />
                      <TrackStatus color="text-gray-600" label="Not Tracked" count="5" icon={<FaMapMarker />} />
                    </div>
                  </div>

                  <div className="bg-white border rounded-lg p-4 mb-6">
                    <h2 className="font-semibold text-gray-800 mb-3">Today's Attendance Summary</h2>
                    <table className="w-full text-left text-sm">
                      <thead className="border-b text-gray-600">
                        <tr>
                          <th className="pb-2">Employee</th>
                          <th>Check In</th>
                          <th>Check Out</th>
                          <th>Status</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center py-4 text-gray-500">No records found</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <ActionButton label="Mark Attendance" />
                    <ActionButton label="Register Fingerprint" />
                    <ActionButton label="Track Location" />
                    <ActionButton label="View Employees" />
                    <ActionButton label="View Reports" />
                  </div>
                </div>
              }
            />

            <Route path="/attendance" element={<Attendance />} />
            <Route path="/fingerprint" element={<Fingerprint />} />
            <Route path="/location" element={<Location />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
