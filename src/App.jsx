import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
import mask from './img/mask.jpg';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51GxpCeDFbNHed4RIyCWPs9y7hLtFCmsmeH7D4jJbknh1qNKxWX7a10nuDEMftK12Dk3gUkEllDnxFz4YGSo9LkiK00DnLW64AF");

export default function App() {
  return (
    <div className="App">
      <div className="store-title">Striped Mask Store</div>
      <div className="product-image"><img src={mask} alt="Striped Mask" /></div>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
