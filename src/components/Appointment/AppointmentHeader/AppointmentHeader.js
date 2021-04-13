import React from "react";
import chair from "../../../images/chair.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleChange }) => {
  return (
    <main>
      <div
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3a4256" }}>APPOINTMENT</h1>
          <Calendar onChange={handleChange} value={new Date()} />
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
