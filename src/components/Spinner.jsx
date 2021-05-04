import React from "react";
import spin from "../img/spinner.gif";

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <img src={spin} className="spin" />
      </div>
    </>
  );
};

export default Spinner;
