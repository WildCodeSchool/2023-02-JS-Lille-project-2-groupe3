import dayjs from "dayjs";
import Timer from "@components/Timer/Timer";
import "./Card.scss";
import localizedFormat from "dayjs/plugin/localizedFormat";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ data }) {
  dayjs.extend(localizedFormat);

  const date = dayjs().format("ll");

  return (
    <div className="card-main">
      <div className="card-content">
        <img src={data.image} alt="" />
        <div className="infos-card">
          <h2 className="h2-card">{data.name}</h2>
          <h3 className="h3-destination-card">{data.destination}</h3>
          <p className="text-description-card">{data.description}</p>
          <Timer data={data} />

          <div className="date-card">{date}</div>

          <div className="card-button">
            <Link className="button-go-card" to={`/Booking-form/${data.id}`}>
              <button className="button-maps-card" type="button">
                GO
              </button>
            </Link>

            <a href={data.map_link} target="_blank" rel="noreferrer">
              <button className="button-maps-card" type="button">
                MAP
              </button>
            </a>
          </div>
          <h4 className="h4-price-card">Price: {data.price} Ke</h4>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    map_link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
