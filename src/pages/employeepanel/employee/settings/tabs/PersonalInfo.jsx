// src/pages/employee/settings/PersonalInfo.jsx
import React from "react";
import { FaUserAlt, FaEnvelope, FaPhone, FaIdBadge, FaBuilding } from "react-icons/fa";

export default function PersonalInfo() {
  return (
    <div className="space-y-6">
      {/* Card body */}
      <div className="bg-white rounded-xl p-5 shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Full Name *</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              <FaUserAlt className="text-slate-400" />
              <input
                className="bg-transparent outline-none text-slate-800 text-sm w-full"
                defaultValue="Rajesh Kumar"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Email Address *</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              <FaEnvelope className="text-slate-400" />
              <input
                className="bg-transparent outline-none text-slate-800 text-sm w-full"
                defaultValue="rajesh.kumar@ramarama.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Phone Number *</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              <FaPhone className="text-slate-400" />
              <input
                className="bg-transparent outline-none text-slate-800 text-sm w-full"
                defaultValue="+91-98765-43210"
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Position</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              <FaIdBadge className="text-slate-400" />
              <input
                className="bg-transparent outline-none text-slate-800 text-sm w-full"
                defaultValue="Security Guard"
              />
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Department</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              <FaBuilding className="text-slate-400" />
              <input
                className="bg-transparent outline-none text-slate-800 text-sm w-full"
                defaultValue="Field Operations"
              />
            </div>
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm text-slate-600 mb-2">Employee ID</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
              <FaIdBadge className="text-slate-400" />
              <input
                className="bg-transparent outline-none text-slate-800 text-sm w-full"
                defaultValue="EMP001"
              />
            </div>
          </div>
        </div>

        {/* Edit button */}
        <div className="mt-6 flex">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow">
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
}
