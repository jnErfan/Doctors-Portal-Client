import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./Doctors_Portal/Pages/Appointment/Appointment";
import Blogs from "./Doctors_Portal/Pages/Blogs/Blogs";
import Contract from "./Doctors_Portal/Pages/Contract/Contract";
import HomeContainer from "./Doctors_Portal/Pages/Home/HomeContainer/HomeContainer";
import NotFound from "./Doctors_Portal/Pages/NotFound/NotFound";
import Preloader from "./Doctors_Portal/Pages/Preloader/Preloader";
import Footer from "./Doctors_Portal/Pages/Shared/Footer/Footer";
import NavBaar from "./Doctors_Portal/Pages/Shared/NavBaar/NavBaar";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-retreat-15947.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="">
      {services.length === 0 ? (
        <Preloader />
      ) : (
        <Router>
          <NavBaar />
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>

            <Route exact path="/home">
              <HomeContainer />
            </Route>

            <Route exact path="/appointment">
              <Appointment />
            </Route>

            <Route exact path="/blogs">
              <Blogs />
            </Route>

            <Route exact path="/contract">
              <Contract />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
