import React, { useEffect } from "react";
import Display from "./Pages/Display";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

function App() {

  useEffect(() => {

    if (window.innerWidth < 768) return;

    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (glow) {
        glow.style.background = `
          radial-gradient(
            500px at ${x}px ${y}px,
            rgba(234,179,8,0.12),
            transparent 80%
          )
        `;
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="text-gray-300 min-h-screen relative">

      {/* 🔥 Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed inset-0 -z-10"
      />

      {/* Toast */}
      <Toaster position="top-right" />

      <Navbar />
      <Display />
      <Footer />
    </div>
  );
}

export default App;