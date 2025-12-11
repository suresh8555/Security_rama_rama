


import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import WhyUs from "./pages/WhyUs";
import ContactUs from "./pages/ContactUs";

import AdminPanel from "./pages/adminpanel/AdminPanel";
import ManagerPanel from "./pages/manegerpannelcards/ManagerPanel"
import EmployeePanel from "./pages/employeepanel/EmployeePanel";

import PageNotFound from "./pages/PageNotFound";

import Login from "./components/Login";




export default function App() {
  const location = useLocation();

  // Hide main navbar for both panels
  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/manager") ||
    location.pathname.startsWith("/employee");
    

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* For Admin & Manager panels, remove pt-20 */}
      <div className={!hideNavbar ? "pt-20" : ""}>
      
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/Whyus" element={<WhyUs />} />
           
          <Route path="/contact" element={<ContactUs />} />

          {/* Admin Panel All Nested Routes */}
          <Route path="/admin/*" element={<AdminPanel />} />

          {/* Manager Panel All Nested Routes */}
          <Route path="/manager/*" element={<ManagerPanel />} />

          {/* Employee Panel All Nested Routes */}
          <Route path="/employee/*" element={<EmployeePanel />} />

          
          {/* login page  */}
          <Route path="/login" element={<Login />} />
         

          {/* Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
      </div>
    </>
  );
}


