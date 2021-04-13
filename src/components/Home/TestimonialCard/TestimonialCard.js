import React from "react";

const TestimonialCard = ({ doctor }) => {
  const { name, country, description, image } = doctor;
  return (
    <div className="col-md-4 border card">
      <p>{description}</p>
      <div className="row d-flex align-items-center">
        <div className="col-md-4">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{name}</h2>
          <p>{country}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
