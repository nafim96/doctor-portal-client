import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";

const MainHeader = () => {
  return (
    <main>
      <div
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#3a4256" }}>
            Your New Smile <br /> starts Here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            optio tenetur omnis dolor velit! Ipsam?
          </p>

          <Link to="/appointment">
            <button className="btn-info">GET APPOINTMENT</button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </div>
    </main>
  );
};

export default MainHeader;
