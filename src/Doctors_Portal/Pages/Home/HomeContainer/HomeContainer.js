import React from "react";
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
      <Banner />
      <Schedule />
      <OurServices />
      <DentalCare />
      <MakeAppointment />
      <Review />
      <Blogs />
      <OurDoctors />
    </div>
  );
};

export default HomeContainer;
