import React from "react";
import exceptional from "../../../images/exceptional.png";

const Exceptional = () => {
  return (
    <section className="container pt-5">
      <div className="row mt-5 mb-5">
        <div className="col-md-5">
          <img src={exceptional} alt="" className="img-fluid" />
        </div>
        <div className="col-md-7 text-start d-flex align-items-center p-5">
          <div>
            <h1>
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium sequi deserunt facere facilis mollitia corrupti vitae
              voluptatem omnis cupiditate? Nulla quaerat deserunt voluptas
              veritatis consequatur ab aperiam mollitia, laborum nam. Illum, sit
              recusandae nobis sed placeat ea nulla consequatur praesentium
              libero quo aperiam natus? Culpa.
            </p>
            <button className="btn-info">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
