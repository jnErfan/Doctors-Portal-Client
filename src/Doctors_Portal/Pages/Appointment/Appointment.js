import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Calendar from "../Calender/Calendar";
import Chair from "./../../Images/chair.png";
import bg from "./../../Images/bg.png";
import Bookings from "../Bookings/Bookings";
import { bookings } from "../../Data/Data";
import Footer from "../Shared/Footer/Footer";
import NavBaar from "../Shared/NavBaar/NavBaar";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const bgStyle = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Box>
      <NavBaar />
      <Box style={bgStyle}>
        <Container sx={{ pt: "150px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: "50px",
                  color: "#203047",
                }}
              >
                Appointment
              </Typography>
              <Calendar date={date} setDate={setDate} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img width="100%" src={Chair} alt="" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: "#1CC7C1",
            fontWeight: "bold",
            textAlign: "center",
            mt: "70px",
          }}
        >
          Available Appointments On {date.toDateString()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: "100px",
          }}
        >
          <Grid container spacing={3}>
            {bookings.map(({ id, name, time, space }) => (
              <Bookings
                name={name}
                time={time}
                space={space}
                key={id}
                date={date}
              />
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Appointment;
