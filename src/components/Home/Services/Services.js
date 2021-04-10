import React from "react";
import fluoride from "../../../images/service-1.png";
import cavity from "../../../images/service-2.png";
import teethWhite from "../../../images/service-3.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const serviceData = [
  {
    id: 1,
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem quasi eos voluptatibus expedita illo.",
    image: fluoride,
  },
  {
    id: 2,
    name: "Cavity Filling",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem quasi eos voluptatibus expedita illo.",
    image: cavity,
  },
  {
    id: 3,
    name: "Teeth Whitening",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptatem quasi eos voluptatibus expedita illo.",
    image: teethWhite,
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mt-5 mb-3">
        <div className="text-center">
          <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
          <h2 style={{ color: "#3A4256" }}>Service We Provide</h2>
        </div>

        <div className="container row m-auto">
          {serviceData.map((service) => (
            <ServiceDetails
              key={service.id}
              services={service}
            ></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
