import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import NavBaar from "../Shared/NavBaar/NavBaar";
import Paper from "@mui/material/Paper";
import axios from "axios";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [deleteAppointments, setDeleteAppointment] = useState("");
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        setDeleteAppointment(data);
      });
  }, [user.email, deleteAppointments]);

  const deleteAppointment = (id) => {
    const confirm = window.confirm("Sure You Want To Cancel This");
    if (confirm === true) {
      axios
        .delete(`http://localhost:5000/appointments/${id}`)
        .then((result) => {
          if (result.data.deletedCount === 1) {
            alert("Cancel Successful");
          }
        });
    } else {
    }
  };

  return (
    <Box>
      <NavBaar />
      <Container sx={{ marginTop: "100px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", my: "50px" }}
        >
          My Appointment
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Grid container spacing={4}>
            {appointment.map(
              ({ _id, date, name, serviceName, number, time, status }) => (
                <Grid item xs={12} sm={12} md={6} lg={4} key={_id}>
                  <Paper sx={{ p: "30px", textAlign: "center" }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: "bold", color: "#1CC7C1" }}
                    >
                      {serviceName}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#3A4256", mt: "10px" }}
                    >
                      {time}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#8B8888", mt: "10px" }}
                    >
                      {date}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#8B8888", mt: "10px" }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#8B8888", mt: "10px" }}
                    >
                      {number}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box sx={{ mx: "15px" }}>
                        <Button
                          onClick={() => deleteAppointment(_id)}
                          variant="contained"
                        >
                          Cancel
                        </Button>
                      </Box>
                      <Box sx={{ mt: "8px", mx: "15px" }}>
                        {!status ? (
                          <span
                            style={{
                              backgroundColor: "#b6feff",
                              padding: "9px 15px",
                              borderRadius: "5px",
                              fontWeight: "bold",
                              color: "#535353",
                            }}
                          >
                            Not Visit
                          </span>
                        ) : (
                          <span
                            style={{
                              backgroundColor: "#007714",
                              padding: "9px 20px",
                              borderRadius: "5px",
                              fontWeight: "bold",
                              color: "#fff",
                            }}
                          >
                            {status}
                          </span>
                        )}
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default MyAppointment;
