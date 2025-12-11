
// import React, { useState, useEffect, useRef } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Sidebar from "../../components/employeepanel/Sidebar"

// import Dashboard from "../Employeepanel/employee/Dashboard"
// import MyAttendance from "../Employeepanel/employee/MyAttendance"
// import Announcement from "../Employeepanel/employee/Announcement"
// import Settings from "../Employeepanel/employee/settings/Setttings"



// import {
//   FaBars,
//   FaStar,
//   FaChartBar,
//   FaCalendarAlt,
//   FaUser,
//   FaBullhorn,
//   FaCog,
// } from "react-icons/fa";


// import PageNotFound from "../PageNotFound";

// const steps = [
//    {
//       title: "Welcome to Employee Portal",
//       step: "Step 1 of 6",
//       description:
//         "Access your attendance records, view your profile, and stay updated with company announcements.",
//       tip: "Navigate using the sidebar menu or use keyboard shortcuts.",
//       icon: <FaStar />,
//     },
//     {
//       title: "Your Dashboard",
//       step: "Step 2 of 6",
//       description:
//         "View your attendance rate, present days, late arrivals, and recent attendance records at a glance.",
//       tip: "Check your dashboard daily to monitor your attendance rate.",
//       icon: <FaChartBar />,
//     },
//     {
//       title: "Attendance History",
//       step: "Step 3 of 6",
//       description:
//         "Check your complete attendance history. See check-in/out times, locations, and working hours.",
//       tip: "",
//       icon: <FaCalendarAlt />,
//     },
//     {
//       title: "Reports & Analytics",
//       step: "Step 4 of 6",
//       description:
//         "View your personal information, contact details, department, and employment status.",
//       tip: "",
//       icon: <FaUser />,
//     },
//     {
//       title: "Announcements",
//       step: "Step 5 of 6",
//       description:
//         "Stay informed with company announcements, safety training, uniform distribution, and shift updates.",
//       tip: "Important announcements are highlighted - don't miss them!",
//       icon: <FaBullhorn />,
//     },
//     {
//       title: "Settings",
//       step: "Step 6 of 6",
//       description:
//         "Update your profile information, change your password, and customize your preferences.",
//       tip: "",
//       icon: <FaCog />,
//   },
// ];

// export default function EmployeePanel() {
//   const [stepIndex, setStepIndex] = useState(0);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const profileRef = useRef(null);
//   const location = useLocation();

//   const titleMap = {
//     "/employee": "Dashboard",
//     "/employee/": "Dashboard",
//     "/employee/announcement": "Announcement",

//     "/employee/attendance": "Attendance",

//     "/employee/myattendance": "MyAttendance",
//     "/employee/settings": "Settings",
    
//   };
//   const title = titleMap[location.pathname] || "Dashboard";

//   const closeTutorial = () => setStepIndex(steps.length);
//   const nextStep = () => setStepIndex((p) => Math.min(p + 1, steps.length));
//   const prevStep = () => setStepIndex((p) => Math.max(p - 1, 0));

//   // Close dropdown on clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setProfileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   if (stepIndex < steps.length) {
//     const current = steps[stepIndex];

//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//         {/* Tutorial remains unchanged */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md w-full relative">
//           <button
//             onClick={closeTutorial}
//             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
//           >
//             ✕
//           </button>

//           <div className="flex items-center space-x-3 mb-3">
//             <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 rounded-xl text-2xl">
//               {current.icon}
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 {current.title}
//               </h2>
//               <p className="text-sm text-gray-500">{current.step}</p>
//             </div>
//           </div>

//           <p className="text-gray-700 mb-6">{current.description}</p>

//           <div className="flex justify-center mb-6 space-x-2">
//             {steps.map((_, i) => (
//               <span
//                 key={i}
//                 className={`w-2 h-2 rounded-full ${
//                   i <= stepIndex ? "bg-blue-600" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>

//           <div className="flex justify-between items-center">
//             <button
//               onClick={closeTutorial}
//               className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
//             >
//               Skip Tutorial
//             </button>

//             <div className="flex space-x-2">
//               {stepIndex > 0 && (
//                 <button
//                   onClick={prevStep}
//                   className="border px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
//                 >
//                   Back
//                 </button>
//               )}
//               <button
//                 onClick={nextStep}
//                 className="bg-black text-white px-5 py-2 rounded-md font-medium hover:bg-gray-900"
//               >
//                 {stepIndex === steps.length - 1 ? "Finish" : "Next"}
//               </button>
//             </div>
//           </div>

//           <div className="bg-blue-50 border rounded-lg p-3 mt-6 flex items-start space-x-2">
//             <span className="text-yellow-500 text-lg">💡</span>
//             <div>
//               <p className="text-sm text-gray-700 font-semibold">Pro Tip</p>
//               <p className="text-sm text-blue-600">{current.tip || "—"}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       <div className="flex-1 flex flex-col">
        
//   <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
//           <div className="flex items-center gap-3">
//             <button
//               className="md:hidden p-2 rounded-md text-gray-600"
//               onClick={() => setSidebarOpen(true)}
//             >
//               <FaBars />
//             </button>
//             <div>
//               <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
//               <p className="text-gray-500 text-sm">Welcome back, employee</p>
//             </div>
//           </div>

//           {/* Avatar Dropdown */}
//           {/* <div className="relative" ref={profileRef}>
//             <button
//               onClick={() => setProfileOpen(!profileOpen)}
//               className="flex items-center gap-2 bg-white border rounded-md px-3 py-2 shadow-sm hover:bg-gray-100 transition"
//             >
//               <FaUser className="text-blue-700" />
//               <div className="text-left">
//                 <p className="text-sm font-semibold text-gray-700">employee</p>
//                 <p className="text-xs text-gray-500">Administrator</p>
//               </div>
//               <FaChevronDown className="text-gray-500 text-xs" />
//             </button>

//             {profileOpen && (
//               <div className="absolute right-0 mt-2 w-44 bg-white  shadow-lg py-2 z-50">
//                 <button className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-100 transition">
//                   <FaIdCard className="text-gray-600" />
//                   My Profile
//                 </button>

//                 <hr className="my-0" />

//                 <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition">
//                   <FaSignOutAlt />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div> */}
//         </header>

      
//         <main className="p-6 overflow-auto">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/announcement" element={<Announcement />} />
//             <Route path="/myattendance" element={<MyAttendance />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Sidebar from "../../components/employeepanel/Sidebar"

import Announcement from "./employee/Announcement";
import MyAttendance from "./employee/MyAttendance";
import Settings from "./employee/settings/Setttings";
import PageNotFound from "../PageNotFound";

// react icons
import {
  FaBars,
  FaCalendarAlt,
  FaClock,
  FaUserCircle,
  FaBell,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";


export default function EmployeePanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const location = useLocation();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function onDoc(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Title mapping for header
  const titleMap = {
    "/employee": "Dashboard",
    "/employee/": "Dashboard",
    "/employee/dashboard": "Dashboard",
    "/employee/announcement": "Announcements",
    "/employee/myattendance": "My Attendance",
    "/employee/settings": "Settings",
    // "/employee/calendar": "Calendar",
    // "/employee/profile": "Profile",
  };
  const title = titleMap[location.pathname] || "Dashboard";

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main column */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen((s) => !s)}
              aria-label="Toggle sidebar"
            >
              <FaBars className="text-xl" />
            </button>

            <div>
              <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
              <p className="text-sm text-slate-500">Welcome back, Rajesh Kumar</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 bg-white border rounded-md text-sm text-slate-700">
              <FaCalendarAlt /> Today
            </button>

            <div ref={profileRef} className="relative">
              <button
                onClick={() => setProfileOpen((p) => !p)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  R
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-sm font-medium text-slate-800">Rajesh Kumar</div>
                  <div className="text-xs text-slate-500">Security Guard</div>
                </div>
                {profileOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow z-40">
                  <Link to="/employee/profile" className="block px-4 py-2 hover:bg-gray-50">Profile</Link>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Logout</button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<DashboardLanding />} />
            <Route path="/dashboard" element={<DashboardLanding />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/myattendance" element={<MyAttendance />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/calendar" element={<div className="p-6 bg-white rounded-lg shadow">Calendar page (placeholder)</div>} />
            <Route path="/profile" element={<div className="p-6 bg-white rounded-lg shadow">Profile page (placeholder)</div>} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

/* -------------------------
   DashboardLanding Component
   Replicates the screenshot UI: top stat cards + recent attendance list
   ------------------------- */
function DashboardLanding() {
  // Sample recent attendance data (replace with real data)
  const recent = [
    { date: "2025-11-02", place: "Tech Park, Sector 18", in: "09:00 AM", out: "06:00 PM", status: "Present", hours: "9h 0m" },
    { date: "2025-11-01", place: "Tech Park, Sector 18", in: "09:00 AM", out: "06:00 PM", status: "Present", hours: "9h 0m" },
    { date: "2025-10-31", place: "Tech Park, Sector 18", in: "09:15 AM", out: "06:00 PM", status: "Late", hours: "8h 45m" },
    { date: "2025-10-30", place: "Tech Park, Sector 18", in: "09:00 AM", out: "06:00 PM", status: "Present", hours: "9h 0m" },
  ];

  return (
    <div className="space-y-6">
      {/* Top cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Attendance Rate" value="80.0%" subtitle="Last 30 days" icon={<FaClock className="text-2xl" />} />
        <StatCard title="Present Days" value="3" subtitle="Out of 5 days" icon={<FaClock className="text-2xl" />} />
        <StatCard title="Late Arrivals" value="1" subtitle="This month" icon={<FaClock className="text-2xl" />} />
        <StatCard title="Absent Days" value="1" subtitle="This month" icon={<FaClock className="text-2xl" />} />
      </div>

      {/* Recent attendance panel */}
      <div className="bg-white rounded-lg shadow border">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium text-slate-800">Recent Attendance</h3>
        </div>

        <div className="p-4">
          <div className="space-y-3">
            {recent.map((r, idx) => (
              <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border">
                <div className="flex items-start space-x-3">
                  <div className="p-3 bg-white rounded-md border">
                    <FaCalendarAlt className="text-slate-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">{r.date}</div>
                    <div className="text-xs text-slate-500">{r.place}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-slate-800 font-medium">{r.in} - {r.out}</div>
                  <div className="text-xs text-slate-500">{r.hours}</div>
                </div>

                <div>
                  <StatusPill status={r.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Small helper components
   ------------------------- */

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-slate-500">{title}</div>
          <div className="text-2xl font-semibold text-slate-800 mt-2">{value}</div>
          <div className="text-xs text-slate-400 mt-1">{subtitle}</div>
        </div>
        <div className="text-indigo-600 bg-indigo-50 p-3 rounded-md">
          {icon}
        </div>
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  const classes =
    status === "Present"
      ? "bg-green-100 text-green-700"
      : status === "Late"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${classes}`}>
      {status}
    </span>
  );
}




