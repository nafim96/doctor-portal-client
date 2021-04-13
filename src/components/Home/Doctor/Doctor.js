import React from "react";
import DoctorDetails from "../DoctorDetails/DoctorDetails";

const Doctor = () => {
  return (
    <section className="doctors">
      <div className="container">
        <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
        <div className="row">
          <DoctorDetails />
          <DoctorDetails />
          <DoctorDetails />
        </div>
      </div>
    </section>
  );
};

export default Doctor;
