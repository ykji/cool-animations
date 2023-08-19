import Home from "./components/Home";
import Loader from "./components/loader/Loader";
import CardFlip from "./components/card-flip/CardFlip";
import ModalPopup from "./components/modal-popup/ModalPopup";
import TextTyping from "./components/text-typing/TextTyping";
import SlideIn from "./components/slide-in-on-scroll/SlideIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BouncingBall from "./components/bouncing-ball/BouncingBall";
import HamburgerMenu from "./components/hamburger-menu/HamburgerMenu";
import AnimatedButton from "./components/animated-button/AnimatedButton";
import ImageZoomEffect from "./components/image-zoom-effect/ImageZoomEffect";
import FloatingElements from "./components/floating-elements/FloatingElements";
import ProgressBar from "./components/progress-bar";

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
          <Route path="hamburger-menu" element={<HamburgerMenu />} />
          <Route path="image-zoom-effect" element={<ImageZoomEffect />} />
          <Route path="floating-elements" element={<FloatingElements />} />
          <Route path="progress-bar" element={<ProgressBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
