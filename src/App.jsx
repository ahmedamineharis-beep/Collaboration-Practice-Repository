import { useState } from 'react'
// import './style.css'
import Home from './pages/home'
import Contact from './pages/services'
import Services from './pages/services'
import { Routes, Route } from "react-router-dom";
import About from './pages/about'

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}
