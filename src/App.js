import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardFlip from "./components/card-flip/CardFlip";
import Loader from "./components/loader/Loader";
import SlideIn from "./components/slide-in-on-scroll/SlideIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="heads-up">Please use laptop/desktop.</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="card-flip" element={<CardFlip />} />
          <Route path="loader" element={<Loader />} />
          <Route path="slide-in-on-scroll" element={<SlideIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
