import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessDetails = ({ businessData }) => {
  const { title, description, icon, background } = businessData;
  return (
    <div className="col-md-4">
      <div class="container overflow-hidden">
        <div class="row gx-5 ">
          <div class="col">
            <div
              style={{
                backgroundColor: background,
                color: "white",
                borderRadius: "10px",
              }}
              class="p-3 border  d-flex align-items-center"
            >
              <div style={{ fontSize: "40px" }} className="p-3">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div>
                <h6>{title}</h6>
                <small>{description}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
