import React from "react";
import inverted from "../../../images/inverted.png";
import ellipse1 from "../../../images/Ellipse 1.png";
import ellipse2 from "../../../images/Ellipse 2.png";
import ellipse3 from "../../../images/Ellipse 3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const doctorData = [
  {
    id: 1,
    name: "Winson Henry",
    country: "California",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
    consequatur maiores aliquid et non corrupti porro quasi suscipit
    tempore fuga sit! Cumque corrupti possimus veritatis asperiores
    eum soluta sunt repellendus`,
    image: ellipse1,
  },
  {
    id: 2,
    name: "Watson Henry",
    country: "California",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
    consequatur maiores aliquid et non corrupti porro quasi suscipit
    tempore fuga sit! Cumque corrupti possimus veritatis asperiores
    eum soluta sunt repellendus`,
    image: ellipse2,
  },
  {
    id: 3,
    name: "Mick Henry",
    country: "California",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
    consequatur maiores aliquid et non corrupti porro quasi suscipit
    tempore fuga sit! Cumque corrupti possimus veritatis asperiores
    eum soluta sunt repellendus`,
    image: ellipse3,
  },
];

const Testimonial = () => {
  return (
    <section>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-8 offset-md-1">
            <h4 className="text-uppercase text-info">testimonial</h4>
            <h1>
              What's Our Patients <br /> Says
            </h1>
          </div>
          <div className="col-md-3">
            <img src={inverted} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row pb-5 mb-5">
          {doctorData.map((doctor) => (
            <TestimonialCard key={doctor.id} doctor={doctor}></TestimonialCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
