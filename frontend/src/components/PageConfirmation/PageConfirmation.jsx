import React from "react";
import "./PageConfirmationStyle.scss";

function PageConfirmation() {
  return (
    <div>
      <div className="nav"></div>

      <h2 className="purchase-title">THANK FOR YOUR PURCHASE</h2>
      <div className="bloc-ticket">
        <div className="qr-code">
          <div className="logo-qr-code-ticket">
            <img
              src="https://i.postimg.cc/y6JCFKn8/logo4.png"
              alt="logo site"
              width="140"
            />
          </div>
          <div className="qr-code-ticket">
            <img
              src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"
              alt="qr code"
              width="130"
            />
          </div>
        </div>

        <div className="ticket-text">
          <h2 className="flight-ticket">Flight N°02B56</h2>
          <div className="date-destination-text">
            <h3 className="destination-purchase-ticket">Destination : Mars</h3>
            <h4 className="date-purchase-ticket">Date : 03/05/2026</h4>
          </div>
          <h2 className="purchase-counter">TIME - 03 : 25 : 45 : 51</h2>
        </div>
        <div className="seats-plan-ticket">
          <img
            src="https://i.postimg.cc/Qtv8pdTc/places.png"
            alt="seats plan"
            width="200"
          />
          <h4 className="seats-description">
            Seat N°A6
            <br />
            Price: 100 000€
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PageConfirmation;
