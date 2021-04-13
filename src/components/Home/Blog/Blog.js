import React from "react";
import ellipes1 from "../../../images/Ellipse 1.png";
import ellipes3 from "../../../images/Ellipse 3.png";
import BlogCard from "../BlogCard/BlogCard";

const topDoctor = [
  {
    id: 1,
    name: "Rashed Kabir",
    data: "22 Aug 2018",
    title: "Check at least a doctor in a year for your teeth",
    icon: "",
  },
  {
    id: 2,
    name: "Dr. Caudi",
    data: "23 April 2019",
    title: "Two times of brush in a day can keep your healthy",
    icon: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae
    exercitationem nobis praesentium ab ad`,
    image: ellipes1,
  },
  {
    id: 3,
    name: "Dr. John Mitchel",
    data: "23 April 2019",
    title: "The Tooth Cancer is taking a challenge",
    icon: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestiae
    exercitationem nobis praesentium ab ad`,
    image: ellipes3,
  },
];

const Blog = () => {
  return (
    <div>
      <div className="text-center">
        <h4 className="text-uppercase text-info">our blog</h4>
        <h1>Form Our Blog News</h1>
      </div>
      <div className="row">
        {topDoctor.map((doctor) => (
          <BlogCard key={doctor.id} doctor={doctor}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
