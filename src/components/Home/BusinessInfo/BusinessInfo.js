import React from "react";
import BusinessDetails from "../BusinessDetails/BusinessDetails";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const businessData = [
  {
    id: "1",
    title: "Opening Hour",
    description: "We are opening 7 days",
    icon: faClock,
    background: "#1CC7C1",
  },
  {
    id: "2",
    title: "Visit Our location",
    description: "Brooklyn, NY 10003 United States",
    icon: faMapMarker,
    background: "#3A4256",
  },
  {
    id: "3",
    title: "Contact Us Now",
    description: "+154 123 4564",
    icon: faPhone,
    background: "#1CC7C1",
  },
];
const BusinessInfo = () => {
  return (
    <section className="container row m-auto">
      {businessData.map((data) => (
        <BusinessDetails key={data.id} businessData={data}></BusinessDetails>
      ))}
    </section>
  );
};

export default BusinessInfo;
