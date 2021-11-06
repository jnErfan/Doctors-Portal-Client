import React from "react";
import { HashLoader } from "react-spinners";
import "./Preloader.css";

const Preloader = () => {
  return (
    <section className="preloader_container">
      <div>
        <HashLoader color={"#10D0E6"} size={150} />
      </div>
    </section>
  );
};

export default Preloader;
