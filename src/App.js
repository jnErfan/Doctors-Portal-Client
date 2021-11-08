import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AdminRoute from "./Doctors_Portal/AdminRoute/AdminRoute";
import AuthContext from "./Doctors_Portal/Context/AuthContext";
import AdminLogin from "./Doctors_Portal/Pages/AdminLogin/AdminLogin";
import Appointment from "./Doctors_Portal/Pages/Appointment/Appointment";
import Contract from "./Doctors_Portal/Pages/Contract/Contract";
import Dashboard from "./Doctors_Portal/Pages/Dashboard/Dashboard";
import HomeContainer from "./Doctors_Portal/Pages/Home/HomeContainer/HomeContainer";
import Login from "./Doctors_Portal/Pages/Login/Login";
import MyAppointment from "./Doctors_Portal/Pages/My Appointment/MyAppointment";
import NotFound from "./Doctors_Portal/Pages/NotFound/NotFound";
import Preloader from "./Doctors_Portal/Pages/Preloader/Preloader";
import SignUp from "./Doctors_Portal/Pages/SignUp/SignUp";
import PrivateRoute from "./Doctors_Portal/PrivateRoute/PrivateRoute";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://doctors-portal-backend-server.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <AuthContext className="">
      {services.length === 0 ? (
        <Preloader />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>

            <Route exact path="/home">
              <HomeContainer />
            </Route>

            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>

            <PrivateRoute exact path="/myAppointment">
              <MyAppointment />
            </PrivateRoute>

            <PrivateRoute exact path="/contract">
              <Contract />
            </PrivateRoute>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <SignUp />
            </Route>

            <Route path="/adminLogin">
              <AdminLogin />
            </Route>

            <AdminRoute path="/dashboard">
              <Dashboard />
            </AdminRoute>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      )}
    </AuthContext>
  );
}

export default App;
