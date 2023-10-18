import React, { useState } from "react";
import "../sass/billingStyles.scss";
import CountrySelect from "./CountrySelect";

function BillingForm() {
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street: "",
    town: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  return (
    <section className="billing__section">
      <div className="billing-container">
        <h1>Billing details</h1>

        <form className="billing-form">
          <div className="inputs">
            {/* full name */}
            <div className="name">
              <div className="input-field">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="first-name"
                  value={billing.firstName}
                  onChange={(e) =>
                    setBilling({
                      ...billing,
                      firstName: String(e.target.value),
                    })
                  }
                />
              </div>

              <div className="input-field">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  value={billing.lastName}
                  onChange={(e) =>
                    setBilling({
                      ...billing,
                      lastName: String(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            {/* company name */}
            <div className="input-field">
              <label htmlFor="company">Company (optional)</label>
              <input
                type="text"
                name="company"
                value={billing.company}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    company: String(e.target.value),
                  })
                }
              />
            </div>

            {/* country */}
            <div className="input-field">
              <label htmlFor="country">Country</label>
              <CountrySelect />
            </div>

            {/* street address */}
            <div className="input-field">
              <label htmlFor="street">Address line 1</label>
              <input
                type="text"
                name="street"
                value={billing.street}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    street: String(e.target.value),
                  })
                }
              />
            </div>

            {/* town/city */}
            <div className="input-field">
              <label htmlFor="town">Town</label>
              <input
                type="text"
                name="town"
                value={billing.town}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    town: String(e.target.value),
                  })
                }
              />
            </div>

            {/* city */}
            <div className="input-field">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={billing.city}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    city: String(e.target.value),
                  })
                }
              />
            </div>

            {/* zip code */}
            <div className="input-field">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                type="text"
                name="zip-code"
                value={billing.zip}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    zip: String(e.target.value),
                  })
                }
              />
            </div>

            {/* phone */}
            <div className="input-field">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={billing.phone}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    phone: String(e.target.value),
                  })
                }
              />
            </div>

            {/* email address */}
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                value={billing.email}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    email: String(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="place-order">
            <div className="product-total">
              <div className="headings">
                <h3>product</h3>
                <h3>subtotal</h3>
              </div>
              <ul className="items-list">
                <li>
                  <p>Asgaard Sofa x 1</p>
                  <p>Rp 120.000</p>
                </li>
              </ul>
              <div className="subtotal">
                <p>subtotal</p>
                <p>Rp 120.000</p>
              </div>
              <div className="total-price">
                <p>total</p>
                <p className="sum">Rp 120.000</p>
              </div>
            </div>

            <hr />

            <div className="payment-method">
              {/* Radio buttons */}
              <p>Select Payment Method</p>

              <div className="radio-input">
                <input
                  type="radio"
                  id="direct-transfer"
                  name="radio-btn"
                  value={"Direct Transfer"}
                />
                <label htmlFor="direct-transfer">Direct Bank Transfer</label>
              </div>

              <div className="extras">
                <p>
                  Make your payments directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped untill the funds have cleared in our account.
                </p>
              </div>

              <div className="radio-input">
                <input type="radio" id="cod" name="radio-btn" value={"cod"} />
                <label htmlFor="cod">Cash On Delivery</label>
              </div>

              <div className="extras">
                <p>
                  Simply pay when the product is at your door step. Please do
                  not provide any delivery fee to the person visiting.
                </p>
              </div>
            </div>

            <div className="policy">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <span>privacy policy</span>
              </p>
            </div>

            <button className="btn-place">Place Order</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BillingForm;
