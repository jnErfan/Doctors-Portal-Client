import React, { useEffect, useState } from "react";
import { Toolbar, Grid, Typography, Box } from "@mui/material";
import Calendar from "../Calender/Calendar";
import TableComponent from "../Table/Table";

const ManageAppointments = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [update, setUpdate] = useState("");
  useEffect(() => {
    fetch(`https://doctors-portal-backend-server.herokuapp.com/appointment?date=${date?.toDateString()}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setUpdate(data);
      });
  }, [date, update]);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#020202", ml: "50px" }}
      >
        Appointments
      </Typography>
      <Grid container spacing={2} sx={{ mt: "50px" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            boxShadow: "1px 1px 4px #8B8870",
            borderRadius: "15px",
            p: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ textAlign: "start", mb: "-20px", color: "#1CC7C1" }}
          >
            Appointments
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "end", mb: "30px" }}>
            {" "}
            {date.toDateString()}
          </Typography>
          <TableComponent appointments={appointments} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageAppointments;
