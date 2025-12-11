import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SidebarAdmin from "../../components/adminpanel/SidebarAdmin";

import Dashboard from "../../pages/adminpanel/admin/Dashboard";
import Employees from "../../pages/adminpanel/admin/Employees";
import Managers from "../../pages/adminpanel/admin/Managers";
import Reports from "../../pages/adminpanel/admin/Reports";
import Activity from "../../pages/adminpanel/admin/Activity";
import Services from "../../pages/adminpanel/admin/Services";
import Testimonials from "../../pages/adminpanel/admin/Testimonials";
import WhyUs from "../../pages/adminpanel/admin/WhyUs";
import Settings from "../../pages/adminpanel/admin/settings/Settings";

import {
  FaClipboardList,
  FaUsers,
  FaUserClock,
  FaChartLine,
  FaShieldAlt,
  FaCog,
  FaBars,
  FaUser,
  FaSignOutAlt,
  FaIdCard,
  FaChevronDown,
} from "react-icons/fa";
import PageNotFound from "../PageNotFound";

const steps = [
  {
    title: "Welcome to Admin Panel",
    step: "Step 1 of 6",
    description:
      "Manage your entire organization from one central dashboard. Access employee data, attendance records, and analytics.",
    tip: "Use the search function to quickly find employees or managers.Navigate using the sidebar menu or use keyboard shortcuts.",
    icon: <FaClipboardList />,
  },
  {
    title: "Employee Management",
    step: "Step 2 of 6",
    description:
      "Add, edit, and manage all employees. Assign departments, roles, and track their status in real-time.",
    tip: "You can bulk import employees using CSV files (coming soon).",
    icon: <FaUsers />,
  },
  {
    title: "Manager Oversight",
    step: "Step 3 of 6",
    description:
      "Create and manage department managers. Assign employees to managers and monitor team performance.",
    tip: "Keep the organization structured for better performance.",
    icon: <FaUserClock />,
  },
  {
    title: "Reports & Analytics",
    step: "Step 4 of 6",
    description:
      "View comprehensive reports with charts and graphs. Export data in PDF, Excel, or CSV formats.",
    tip: "Export reports regularly to track organizational performance.",
    icon: <FaChartLine />,
  },
  {
    title: "Service Management",
    step: "Step 5 of 6",
    description:
      "Manage your security services: Corporate Security and Apartment/Building Security. Update descriptions and features.",
    tip: "Update services anytime to improve business leads.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Settings & Configuration",
    step: "Step 6 of 6",
    description:
      "Customize company information, branding, notifications, security settings, and integrations.",
    tip: "You can change anything later anytime.",
    icon: <FaCog />,
  },
];

export default function AdminPanel() {
  const [stepIndex, setStepIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();

  const titleMap = {
    "/admin": "Dashboard",
    "/admin/": "Dashboard",
    "/admin/employees": "Employees",
    "/admin/managers": "Managers",
    "/admin/reports": "Reports",
    "/admin/activity": "Activity",
    "/admin/services": "Services",
    "/admin/testimonials": "Testimonials",
    "/admin/whyus": "Why Us",
    "/admin/settings": "Settings",
  };
  const title = titleMap[location.pathname] || "Dashboard";

  const closeTutorial = () => setStepIndex(steps.length);
  const nextStep = () => setStepIndex((p) => Math.min(p + 1, steps.length));
  const prevStep = () => setStepIndex((p) => Math.max(p - 1, 0));

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (stepIndex < steps.length) {
    const current = steps[stepIndex];

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        {/* Tutorial remains unchanged */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md w-full relative">
          <button
            onClick={closeTutorial}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>

          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 rounded-xl text-2xl">
              {current.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {current.title}
              </h2>
              <p className="text-sm text-gray-500">{current.step}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{current.description}</p>

          <div className="flex justify-center mb-6 space-x-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i <= stepIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={closeTutorial}
              className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
            >
              Skip Tutorial
            </button>

            <div className="flex space-x-2">
              {stepIndex > 0 && (
                <button
                  onClick={prevStep}
                  className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Back
                </button>
              )}
              <button
                onClick={nextStep}
                className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900"
              >
                {stepIndex === steps.length - 1 ? "Finish" : "Next"}
              </button>
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
      <SidebarAdmin open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md text-gray-600"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
              <p className="text-gray-500 text-sm">Welcome back, Admin</p>
            </div>
          </div>

          {/* Avatar Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 bg-white border rounded-md px-3 py-2 shadow-sm hover:bg-gray-100 transition"
            >
              <FaUser className="text-blue-700" />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">Admin</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <FaChevronDown className="text-gray-500 text-xs" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white  shadow-lg py-2 z-50">
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
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
