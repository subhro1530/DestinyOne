// components/StatusSection.js
import React from "react";
import Status from "./Status";

const StatusSection = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Status number={245} label="Monthly clients" />
      <Status number={182} label="Special offers" />
      <Status number={1267} label="Positive reviews" />
      <Status number={47} label="Partners throughout the USA" />
    </div>
  );
};

export default StatusSection;
