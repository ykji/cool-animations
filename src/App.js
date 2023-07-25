import Home from "./components/Home";
import Loader from "./components/loader/Loader";
import CardFlip from "./components/card-flip/CardFlip";
import ModalPopup from "./components/modal-popup/ModalPopup";
import SlideIn from "./components/slide-in-on-scroll/SlideIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BouncingBall from "./components/bouncing-ball/BouncingBall";
import AnimatedButton from "./components/animated-button/AnimatedButton";
import TextTyping from "./components/text-typing/TextTyping";

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
          <Route path="animated-button" element={<AnimatedButton />} />
          <Route path="modal-popup" element={<ModalPopup />} />
          <Route path="bouncing-ball" element={<BouncingBall />} />
          <Route path="text-typing" element={<TextTyping />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
