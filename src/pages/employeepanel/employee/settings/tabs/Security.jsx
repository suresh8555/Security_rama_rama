import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Security() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="space-y-10">

      {/* CHANGE PASSWORD CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold text-slate-800">Change Password</h3>

        <div className="mt-6 space-y-6">

          {/* Current Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Current Password
            </label>
            <div className="relative mt-2">
              <FaLock className="absolute left-3 top-3 mt-1 text-slate-400" />
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full pl-10 pr-12 py-3 border rounded-xl text-slate-700 placeholder-slate-400 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-3 text-slate-500 text-lg"
              >
                {showCurrent ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              New Password
            </label>
            <div className="relative mt-2">
              <FaLock className="absolute left-3 top-3 mt-1 text-slate-400" />
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full pl-10 pr-12 py-3 border rounded-xl text-slate-700 placeholder-slate-400
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-3 text-slate-500 text-lg"
              >
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <p className="text-xs text-slate-400 mt-1">
              Password must be at least 6 characters long
            </p>
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Confirm New Password
            </label>
            <div className="relative mt-2">
              <FaLock className="absolute left-3 top-3 mt-1 text-slate-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full pl-10 pr-12 py-3 border rounded-xl text-slate-700 placeholder-slate-400 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-slate-500 text-lg"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Change Password Button */}
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium 
                             hover:bg-indigo-700 transition">
            Change Password
          </button>
        </div>
      </div>

      {/* TWO FACTOR AUTH CARD */}
      <div className="bg-white border shadow-sm rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-800">
          Two-Factor Authentication
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-700">
              Enable Two-Factor Authentication
            </p>
            <p className="text-xs text-slate-500">
              Add an extra layer of security to your account
            </p>
          </div>

          {/* iOS style switch */}
          <div
            onClick={() => setTwoFA(!twoFA)}
            className={`w-12 h-6 flex items-center rounded-full cursor-pointer p-1 transition 
            ${twoFA ? "bg-indigo-600" : "bg-gray-300"}`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition 
              ${twoFA ? "translate-x-6" : "translate-x-0"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
