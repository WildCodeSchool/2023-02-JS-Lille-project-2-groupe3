import { Routes, Route } from "react-router-dom";
import Payment from "@pages/PaymentForm/Payment";
import ArticlesMobilePage from "@pages/ArticlesMobilePage/ArticlesMobilePage";
import AboutUsPageMobile from "@pages/AboutUsPageMobile/AboutUsPageMobile";
import AboutUsPage from "@pages/AboutUsPage/AboutUsPage";
import BookingForm from "@pages/BookingForm/BookingForm";
import Home from "@pages/Home";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar/NavBar";
import NavBarMobile from "./components/NavBar/NavBarMobile/NavBarMobile";
import ConfirmationPage from "./pages/ConfirmationPage";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      {screenSize.width < 600 ? <NavBarMobile /> : <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Booking-form/:id"
          element={<BookingForm message={message} setMessage={setMessage} />}
        />
        <Route path="/Payment-form" element={<Payment />} />
        <Route path="/About-us" element={<AboutUsPage />} />
        <Route path="/ArticlesMobilePage" element={<ArticlesMobilePage />} />
        <Route path="/AboutUsPageMobile" element={<AboutUsPageMobile />} />
        <Route
          path="/ConfirmationPage/:id"
          element={<ConfirmationPage daronne={message} />}
        />
      </Routes>
    </>
  );
}
export default App;
