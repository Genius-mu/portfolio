import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Content1 from "./reusables/Content1";
import Portfolio from "./Portfolio/Portfolio";
import HomePage from "./HomePage/Home";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
