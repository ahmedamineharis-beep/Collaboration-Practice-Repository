import { useState } from 'react'
feature/test
// import './style.css'
import Home from './pages/home'
import Contact from './pages/services'
import Services from './pages/services'
import { Routes, Route } from "react-router-dom";
import About from './pages/about'
import Home from './src/Pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
main

export default function App() {
  return (
    <>
feature/test
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

      <Home />
main
    </>
  );
}
