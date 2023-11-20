import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/organs/Navbar";
import "./index.css";
import Home from "./components/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";

const App = () => {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);
  return (
    <div className="w-full h-full bg-zinc-900 font-mono relative text-zinc-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
