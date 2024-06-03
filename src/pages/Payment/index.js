// src/components/PaymentPage.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentPage.css';

const stripePromise = loadStripe('your-publishable-key-here');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    // Add your payment handling logic here
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Payment Information</h2>
      <div className="form-group">
        <label htmlFor="card-element">Credit or Debit Card</label>
        <CardElement id="card-element" className="card-element" />
      </div>
      <button type="submit" disabled={!stripe} className="submit-button">
        Pay Now
      </button>
    </form>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentPage;
