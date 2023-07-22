import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardFlip from "./components/card-flip/CardFlip";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="card-flip" element={<CardFlip />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
