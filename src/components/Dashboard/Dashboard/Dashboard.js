import React, { useContext, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { UserContext } from "../../../App";

const containerStyle = {
  //   position: "absolute",
  //   right: 0,
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [selectedDate]);

  return (
    <main>
      <section>
        <div className="container-fluid bg-danger">
          <Navbar></Navbar>
        </div>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-5">
            <Calendar onChange={handleChange} value={new Date()} />
          </div>
          <div className="col-md-5">
            <AppointmentsByDate appointments={appointments} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
