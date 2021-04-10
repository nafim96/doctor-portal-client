import React from "react";

const ServiceDetails = ({ services }) => {
  const { name, description, image } = services;
  return (
    <div className="col-md-4 mt-5">
      <div class="container overflow-hidden">
        <div class="row gx-5 ">
          <div class="col">
            <div class="p-3 border-0">
              <div className="d-flex justify-content-center p-3">
                <img src={image} alt="" className="img-fluid" />
              </div>
              <div className="text-center">
                <h4 className="p-2">{name}</h4>
                <small>{description}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
