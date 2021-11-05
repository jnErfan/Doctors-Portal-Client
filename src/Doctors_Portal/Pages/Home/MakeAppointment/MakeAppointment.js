import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../Images/doctor.png";
import appointment from "../../../Images/appointment-bg.png";

const MakeAppointment = () => {
  return (
    <Box
      sx={{
        background: `url(${appointment})`,
        backgroundSize: "130%",
      }}
    >
      <Box
        style={{
          background: "#3A4256",
          opacity: 0.8529411764705882,
          position: "static",
          height: "80vh",
          marginBottom: 200,
          marginTop: 200,
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid xs={6} md={6} lg={5}>
            <img
              style={{ marginTop: "-182px" }}
              width="120%"
              src={doctor}
              alt=""
            />
          </Grid>
          <Grid xs={6} md={6} lg={7}>
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
              Temporibus accusantium ad tempore ex ab corrupti? Suscipit facere
              corrupti necessitatibus ratione impedit
            </Typography>
            <Button
              sx={{
                background: "linear-gradient(90deg,#19D3AE,#0FCFEC)",
                color: "#fff",
                padding: "10px 44px",
                marginTop: "50px",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MakeAppointment;
