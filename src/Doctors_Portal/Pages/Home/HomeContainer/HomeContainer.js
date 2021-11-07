import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavBaar from "../../Shared/NavBaar/NavBaar";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import DentalCare from "../DentalCare/DentalCare";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import OurDoctors from "../OurDoctors/OurDoctors";
import OurServices from "../OurServices/OurServices";
import Review from "../Review/Review";
import Schedule from "../Schedule/Schedule";

const HomeContainer = () => {
  return (
    <div>
      <NavBaar />
      <Banner />
      <Schedule />
      <OurServices />
      <DentalCare />
      <MakeAppointment />
      <Review />
      <Blogs />
      <OurDoctors />
      <Footer />
    </div>
  );
};

export default HomeContainer;
