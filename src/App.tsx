import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organs/Navbar";
import "./index.css";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="w-full h-full bg-zinc-900 font-mono relative text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
