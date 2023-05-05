import "./Timer.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Timer({ data }) {
  const [timer, setTimer] = useState();

  const getChrono = () => {
    const now = new Date().getTime();
    const countdownDate = new Date(data.departure_at).getTime();
    const distanceBase = countdownDate - now;
    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    setTimer(
      <div className="timer">
        <div>
          <h2>T-</h2>
        </div>
        <div>
          <h2>{days}</h2>
          <p>Days</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div>
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div>
          <h2>{minutes}</h2>
          <p>Mins</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div>
          <h2>{seconds}</h2>
          <p>Secs</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setInterval(() => {
      getChrono();
    }, 1000);
  }, []);

  return <div>{timer}</div>;
}
Timer.propTypes = {
  data: PropTypes.shape({
    departure_at: PropTypes.string.isRequired,
  }).isRequired,
};
export default Timer;
