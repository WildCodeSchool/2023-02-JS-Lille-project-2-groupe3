import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingFormScss.scss";
import axios from "axios";
import PropTypes from "prop-types";

export default function BookingForm({ setMessage }) {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fly/${id}`)
      .then((result) => setData(result.data));
  }, []);

  const [bookingFormInfo, setBookingFormInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    seat: "",
  });

  const handleChangeBooking = (e) => {
    const input = e.target;
    setBookingFormInfo({ ...bookingFormInfo, [input.name]: input.value });
  };

  // seat
  const handleSeatChange = (e) => {
    const input = e.target;
    setBookingFormInfo({ ...bookingFormInfo, [input.name]: input.id });
  };

  // checked
  const [checked, setChecked] = React.useState(false);

  // state Checkbox
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  // health
  const [health, setHealth] = useState("");
  // state Health
  const handleHealthChange = (e) => {
    setHealth(e.target.value);
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked || health !== "health") {
      // condition si age et santé pas ok
      alert(
        "Make an appointment with your doctor to obtain a medical certificate."
      );
    } else {
      setMessage(bookingFormInfo);
      navigate(`/ConfirmationPage/${data.id}`);
    }
  };

  return (
    <div className="formbook-booking">
      <form className="formbook" onSubmit={handleSubmit}>
        <div className="formbook-contenair-total">
          <div className="contenair-formbook-identity">
            <h2 className="formbook-h2">Identity:</h2>
            <div>
              <input
                className="formbook-input-class"
                type="text"
                name="firstname"
                placeholder="First-Name"
                value={bookingFormInfo.firstname}
                onChange={handleChangeBooking}
              />
            </div>

            <div>
              <input
                className="formbook-input-class"
                type="text"
                name="lastname"
                placeholder="Last-Name"
                value={bookingFormInfo.lastname}
                required
                onChange={handleChangeBooking}
              />
            </div>

            <div>
              <input
                className="formbook-input-class"
                type="email"
                name="email"
                placeholder="Email"
                value={bookingFormInfo.email}
                required
                onChange={handleChangeBooking}
              />
            </div>

            <div>
              <input
                className="formbook-input-class"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={bookingFormInfo.phone}
                required
                onChange={handleChangeBooking}
              />
            </div>
          </div>
          <div className="contenair-formbook-condition">
            <h2 className="formbook-h2">Access Requierement</h2>
            <div className="formbook-contenair-18">
              <p className="formbook-label-18">I am over 18: </p>
              <input
                className="formbook-input-check"
                type="checkbox"
                id="checkbox1"
                name="checkbox1"
                checked={bookingFormInfo.checked}
                required
                onChange={handleCheckboxChange}
              />
            </div>
            <select
              className="formbook-option-health"
              name="health"
              id="health-select"
              defaultValue="DEFAULT"
              required
              onChange={(evt) => {
                handleHealthChange(evt);
              }}
            >
              <option className="formbook-option-health2" value="DEFAULT">
                --Please choose an option--
              </option>
              <option className="formbook-option-health2" value="nohealth">
                I don't have a medical certificate
              </option>
              <option className="formbook-option-health2" value="health">
                I have a medical certificate
              </option>
            </select>
          </div>
          <div className="contenair-formbook-seat">
            <h2 className="formbook-h2">Seat</h2>
            <div className="formbook-box-total-seat">
              <div className="formbook-seat-img-text">
                <p className="formbook-label-style-seat">
                  Seat n° {bookingFormInfo.seat}
                </p>
                <p className="formbook-label-style-seat-price">
                  Price: {data.price} Ke
                </p>
              </div>

              <div className="formbook-box-img-navette">
                <div className="formbook-first-row">
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A1"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A2"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                </div>

                <div className="formbook-second-row">
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A3"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A4"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                </div>

                <div className="formbook-third-row">
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A5"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A6"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                  <button
                    type="button"
                    className="formbook-seatA"
                    id="A7"
                    name="seat"
                    onClick={handleSeatChange}
                  >
                    ⬒
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contenair-formbook-button">
          <button className="formbook-button-book" type="submit">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

BookingForm.propTypes = {
  setMessage: PropTypes.string.isRequired,
};
