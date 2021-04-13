import React from "react";
import ServiceAppoint from "../ServiceAppoint/ServiceAppoint";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Doctor from "../Doctor/Doctor";
import Exceptional from "../Exceptional/Exceptional";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Exceptional></Exceptional>
      <div className="mt-5 pt-5">
        <ServiceAppoint></ServiceAppoint>
      </div>
      <div>
        <Testimonial></Testimonial>
      </div>
      <div>
        <Blog></Blog>
      </div>
      <div>
        <Doctor></Doctor>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
