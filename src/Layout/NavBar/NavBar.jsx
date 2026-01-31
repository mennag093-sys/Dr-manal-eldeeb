import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `pb-1 transition ${isActive ? "border-b-2 border-[#CE9F2B] text-[#CE9F2B]" : "text-[#2B416A]"}`;

  return (
    <nav className="w-full" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-4 relative mt-8">

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <img src={logo} alt="logo" className="h-16" />
        </div>

      <ul className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-16 text-[#2B416A] font-bold">

         <NavLink to="/" className={navLinkClass}>الرئيسية</NavLink>
         <NavLink to="/course" className={navLinkClass}>الكورسات</NavLink>
         <NavLink to="/consulting" className={navLinkClass}>الاستشارات</NavLink>
         <NavLink to="/books" className={navLinkClass}>الكتب</NavLink>
         <NavLink to="/contact" className={navLinkClass}>تواصل معنا</NavLink>
        </ul>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
          <Link to="/login">
            <button className="hidden md:block bg-[#2B416A] text-white px-5 py-2 rounded-lg">
              تسجيل الدخول
            </button>
          </Link>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>
      {open && (
        <div className="md:hidden bg-white border-t py-4 flex flex-col gap-4 font-medium px-6">
          <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>الرئيسية</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/courses" className={navLinkClass}>الكورسات</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/consulting" className={navLinkClass}>الاستشارات</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/books" className={navLinkClass}>الكتب</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>تواصل معنا</NavLink>

          <Link to="/login">
            <button className="bg-[#2B416A] text-white px-5 py-2 rounded-lg">
              تسجيل الدخول
            </button>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default NavBar;
