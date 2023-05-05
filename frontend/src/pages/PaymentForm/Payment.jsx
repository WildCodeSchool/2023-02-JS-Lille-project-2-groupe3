import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Payment.scss";

import {
  FaCcVisa,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

function Payment() {
  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
      axios.post("/sendmail");
    }, []);

    e.preventDefault();
  };

  return (
    <>
      <div className="main-form">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <div className="content-first-payment">
            <div className="billing">
              <h2 className="h2-payment">Billing address</h2>
              <input type="hidden" name="form-name" value="contact" />
              <label className="label-payment" htmlFor="FullName">
                Full Name
              </label>
              <input
                type="text"
                name="FullName"
                id="FullName"
                placeholder="Full Name"
              />

              <label className="label-payment" htmlFor="Email">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="email" />

              <label className="label-payment" htmlFor="Address">
                Address
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                placeholder="Address"
              />

              <label className="label-payment" htmlFor="City">
                City
              </label>
              <input type="text" name="City" id="Address" placeholder="City" />

              <div className="zip">
                <div className="content-zip">
                  <label className="label-payment" htmlFor="Zip">
                    Zip
                  </label>
                  <input type="text" name="Zip" id="Zip" placeholder="Zip" />
                </div>
                <div className="content-zip">
                  <label className="label-payment" htmlFor="State">
                    State
                  </label>
                  <input
                    type="text"
                    name="State"
                    id="State"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>

            <div className="payment">
              <h2 className="h2-payment">Payment</h2>
              <p className="label-accept">Accept Card</p>
              <div className="icon-container">
                <ul>
                  <li>
                    <FaCcVisa />
                  </li>
                  <li>
                    <FaCcApplePay />
                  </li>
                  <li>
                    <FaCcMastercard />
                  </li>
                  <li>
                    <FaCcPaypal />
                  </li>
                </ul>
              </div>
              <label className="label-payment" htmlFor="cname">
                Name on Card
              </label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="John More Doe"
              />
              <label className="label-payment" htmlFor="ccnum">
                Credit card number
              </label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
              />
              <label className="label-payment" htmlFor="expmonth">
                Exp Month
              </label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
              />
              <div className="cvv">
                <div className="exp">
                  <label className="label-payment" htmlFor="expyear">
                    Exp Year
                  </label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2018"
                  />
                </div>
                <div className="csv">
                  <label className="label-payment" htmlFor="cvv">
                    CVV
                  </label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" />
                </div>
              </div>
            </div>
          </div>
          <div className="btn-payment">
            <button type="submit" onSubmit={() => handleSubmit()}>
              Confirm
            </button>
          </div>
        </form>
      </div>
      <NavLink to="/">Retour</NavLink>
    </>
  );
}

export default Payment;
