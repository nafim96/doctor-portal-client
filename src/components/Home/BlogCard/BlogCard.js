import React from "react";

const BlogCard = ({ doctor }) => {
  const { name, title, description, image, icon, date } = doctor;
  return (
    <div className="col-md-4">
      <div className="row d-flex align-items-center">
        <div className="col-md-4">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
