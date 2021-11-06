import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../Images/doctor.png";
import appointment from "../../../Images/appointment-bg.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
    <Box
      style={{
        background: `url(${appointment})`,
        backgroundColor: "#1a1d27",
        backgroundSize: "130%",
        backgroundBlendMode: "overlay",
        position: "static",
        marginBottom: 200,
        marginTop: 200,
        padding: "50px",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid xs={6} md={6} lg={5}>
          <img
            style={{
              position: "absolute",
              marginTop: "-319px",
            }}
            width="40%"
            src={doctor}
            className="doctor"
            alt=""
          />
        </Grid>
        <Grid xs={6} md={6} lg={7} className="textAll">
          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#6ACECE", marginTop: "0" }}
            >
              APPOINTMENT
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "500", marginTop: "30px", color: "#fff" }}
            >
              Make An Appointment <br /> Today
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "30px", color: "#fff" }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus <br />
              accusantium ad tempore ex ab corrupti? Suscipit facere corrupti{" "}
              <br />
              necessitatibus ratione impedit
            </Typography>
            <Button
              sx={{
                background: "linear-gradient(90deg,#19D3AE,#0FCFEC)",
                color: "#fff",
                padding: "10px 44px",
                marginTop: "50px",
                fontWeight: "bold",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeAppointment;
