import React from "react";
import Display from "./Pages/Display";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="relative bg-[#112233] text-gray-300 min-h-screen">

      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <Navbar />
      <Display />
      <Footer />

    </div>
  );
}

export default App;