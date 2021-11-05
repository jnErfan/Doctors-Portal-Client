import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import treatment from "../../../Images/treatment.png";

const DentalCare = () => {
  return (
    <Container sx={{ marginTop: "150px" }}>
      <Box>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} lg={6}>
            <img width="90%" height="90%" src={treatment} alt="" />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <Typography
              variant="h3"
              sx={{
                textWidth: "bold",
                marginBottom: "50px",
                marginTop: "50px",
              }}
            >
              Exceptional Dental <br /> Care, On Your Term
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#B2B2B2", marginBottom: "90px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dicta minima rem, possimus veniam voluptatem maxime, veritatis ab
              et sint necessitatibus sapiente animi adipisci corporis porro
              libero fugit dolorum aliquid cum amet molestiae magnam commodi
              nulla totam! Voluptate aliquid officiis dignissimos quis modi ex
              voluptatum excepturi soluta inventore! Unde, qui.
            </Typography>
            <Button
              sx={{
                background: "linear-gradient(90deg,#19D3AE,#0FCFEC)",
                color: "#fff",
                padding: "17px 44px",
                marginBottom: 5,
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DentalCare;
