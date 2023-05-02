import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./PageConfirmationStyle.scss";
import PropTypes from "prop-types";

function ConfirmationPage({ daronne }) {
  const [data, setData] = useState("");

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fly/${id}`)
      .then((resulte) => setData(resulte.data));
  }, []);

  return (
    <div>
      <h2 className="purchase-title">THANK FOR YOUR PURCHASE !</h2>
      <div className="boarding-pass">
        <h2>BOARDING PASS</h2>
      </div>
      <div className="bloc-ticket">
        <div className="container-qr-code">
          <div className="list-qr-code">
            <ul>
              <li className="list-qr-code-flight">{data.name}</li>
              <li className="list-qr-code-date">{data.departure_at}</li>
              <li className="list-qr-code-description">{data.destination}</li>
              <li className="list-qr-code-name">
                {daronne.firstname} {daronne.lastname}
              </li>
              <li>
                <p>{daronne.email}</p>
                <p>{daronne.phone}</p>
              </li>
            </ul>
          </div>
          <div className="qr-code-ticket">
            <img
              src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
              alt="qr code"
              className="qr-code-logo"
              width="130"
            />
            <img
              src="https://i.postimg.cc/Mpd2xdP7/scissors.png"
              alt="scissors"
              className="scissors"
              width="20"
            />
          </div>
        </div>
        <div className="ticket-text">
          <h2 className="flight-ticket">{data.name}</h2>
          <div className="date-destination-text">
            <h3 className="destination-purchase-ticket">{data.destination}</h3>
            <h4 className="date-purchase-ticket">{data.departure_at}</h4>
          </div>
          <h2 className="purchase-counter">YOUR FLIGHT IN 03 : 25 : 45 : 51</h2>
        </div>
        <div className="container-seats-plan-ticket">
          <img
            src="https://i.postimg.cc/Qtv8pdTc/places.png"
            alt="seats plan"
            width="200"
          />
          <h4 className="seats-description">
            {daronne.seat}
            <br />
            {data.price}
          </h4>
        </div>
      </div>
      <div className="container-video-page-confirmation">
        <h2 className="title-video-page-confirmation">Watch last flight</h2>
        <pre className="youtube-video-page-confirmation">
          <iframe
            width="700"
            height="500"
            src="https://www.youtube.com/embed/dYg3V-qfdOI"
            title="Last Flight"
          />
        </pre>
      </div>
    </div>
  );
}

ConfirmationPage.propTypes = {
  daronne: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    seat: PropTypes.number.isRequired,
  }).isRequired,
};

export default ConfirmationPage;
