import React from "react";
import Preloader from "../Preloader/Preloader";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section>
      <section
        className="main_header container-fluid"
        style={{ marginTop: "100px" }}
      >
        <div className="erfan">
          <h1>Hello!</h1>
          <h1>IM J.N.Erfan</h1>
        </div>
      </section>
      <Preloader />
    </section>
  );
};

export default Blogs;
