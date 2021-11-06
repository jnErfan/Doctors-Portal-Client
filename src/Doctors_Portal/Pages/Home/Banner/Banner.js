import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Banner.css";
import Chair from "./../../../Images/chair.png";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();
  const style = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <Box style={style} className="banner">
      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: 5 }}
            >
              Your New Smile <br /> Start Here
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 5, color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,{" "}
              <br />
              praesentium non. Ex ducimus magnam sunt aperiam nemo <br /> in
              totam consectetur expedita dolorum.
            </Typography>
            <Button
              onClick={() => history.push("/appointment")}
              sx={{
                background: "linear-gradient(90deg,#19D3AE,#0FCFEC)",
                color: "#fff",
                padding: "17px 44px",
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              Get Appointment
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img width="100%" src={Chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
