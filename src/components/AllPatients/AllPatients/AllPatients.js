import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../../Dashboard/AppointmentDateTable/AppointmentDateTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  console.log("get data from all patient", appointments);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container-fluid row ">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-10 p-4"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">All Patients</h5>

        <AppointmentDataTable appointment={appointments} />
      </div>
    </div>
  );
};

export default AllPatients;
