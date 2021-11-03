import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Doctors_Portal/Pages/About/About";
import Blogs from "./Doctors_Portal/Pages/Blogs/Blogs";
import Contract from "./Doctors_Portal/Pages/Contract/Contract";
import HomeContainer from "./Doctors_Portal/Pages/Home/HomeContainer/HomeContainer";
import NotFound from "./Doctors_Portal/Pages/NotFound/NotFound";
import Services from "./Doctors_Portal/Pages/Services/Services";
import Footer from "./Doctors_Portal/Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBaar /> */}
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>

          <Route exact path="/home">
            <HomeContainer />
          </Route>

          <Route exact path="/services">
            <Services />
          </Route>

          <Route exact path="/blogs">
            <Blogs />
          </Route>

          <Route exact path="/contract">
            <Contract />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
