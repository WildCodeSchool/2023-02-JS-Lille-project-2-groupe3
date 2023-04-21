import { Routes, Route } from "react-router-dom";
import "./App.css";
import BookingForm from "@components/BookingForm/BookingForm";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking-form" element={<BookingForm />} />
      </Routes>
    </>
  );
}
export default App;
