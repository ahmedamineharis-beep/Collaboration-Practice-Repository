import React from "react";
export default function Navbar({ textColor = "text-white", borderColor = "border-white/50" }) {
  return (
    <nav className={`absolute top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8 bg-transparent ${textColor}`}>
      <div className="flex items-center gap-2 text-xl font-semibold tracking-tight">
      </div>
      <div className="hidden md:flex gap-10 text-sm font-medium opacity-90">
        <a href="/" className="hover:opacity-100 transition">Home</a>
        <a href="/services" className="hover:opacity-100 transition">Services</a>
        <a href="/about" className="hover:opacity-100 transition">About Us</a>
      </div>
      <a className={`px-6 py-2 border rounded-full text-sm font-medium transition-all flex items-center gap-2 ${borderColor} hover:bg-black hover:text-white href="/contact"`}>
        Contact Us <span className="rotate-[-45deg] inline-block">→</span>
      </a></nav>);};