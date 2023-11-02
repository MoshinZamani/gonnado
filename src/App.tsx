import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import Personal from "./components/Personal";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </>
  );
}

export default App;
