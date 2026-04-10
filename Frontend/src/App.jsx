import React from "react";
import Display from "./Pages/Display";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="text-gray-300 min-h-screen">
      <Navbar />
      <Display />
      <Footer />
    </div>
  );
}

export default App;