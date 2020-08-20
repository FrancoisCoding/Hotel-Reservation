import React, { Component } from "react";
import PaypalBtn from "./PaypalBtn";

const PaymentExample = ({ amount, showModal }) => {
  const paymentHandler = (details, data) => {
    /** Here you can call your backend API
        endpoint and update the database */
    showModal();
    console.log(details, data);
  };

  return (
    <div>
      <PaypalBtn
        amount={amount ? amount : 0}
        currency={"USD"}
        onSuccess={paymentHandler}
      />
    </div>
  );
};

export default PaymentExample;
