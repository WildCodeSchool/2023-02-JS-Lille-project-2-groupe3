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
import Footer from "./components/Footer/Footer";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import "./App.scss";

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
      <div className="top-mobile">
        <img
          className="logo-picture-top"
          src="/src/images/logonav.png"
          alt="Logo Space W"
        />
      </div>
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
          element={<ConfirmationPage identity={message} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
