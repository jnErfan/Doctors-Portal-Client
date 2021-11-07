import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { GradientButton } from "../Home/MUiStyled/GradientButton";
import ModalForm from "./ModalForm/ModalForm";

const Bookings = ({ name, time, space, date }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} sx={{ mb: "100px" }}>
      <Paper elevation={0} sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1CC7C1" }}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#3A4256", mt: "10px" }}
        >
          {time}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "#8B8888", mt: "10px" }}
        >
          {space} SPACES AVAILABLE
        </Typography>
        <GradientButton onClick={handleOpen} sx={{ py: "10px", mt: "15px" }}>
          Book Appointment
        </GradientButton>
      </Paper>

      <ModalForm
        open={open}
        handleClose={handleClose}
        name={name}
        time={time}
        date={date}
      />
    </Grid>
  );
};

export default Bookings;
