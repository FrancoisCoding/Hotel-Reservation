import React from "react";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";
import Title from "../Home/Title";

const Modal = ({ visible, hideModal }) => {
  return (
    <div>
      <Rodal visible={visible} onClose={hideModal}>
        <Title title="Payment Successful" />
      </Rodal>
    </div>
  );
};

export default Modal;
