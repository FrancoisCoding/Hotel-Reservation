import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
const PaypalBtn = ({ amount, onSuccess, currency }) => {
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      onSuccess={(details, data) => onSuccess(details, data)}
      options={{
        clientId: process.env.REACT_APP_PAYPAL_ID,
      }}
    />
  );
};

export default PaypalBtn;
