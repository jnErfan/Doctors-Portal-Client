import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { services } from "../../../Data/Data";

const OurServices = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "150px",
            color: "#10B5A9",
          }}
        >
          OUR SERVICES
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "30px",
            color: "#203047",
          }}
        >
          Services We Provide
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid container spacing={3} sx={{ marginTop: "30px" }}>
            {services.map(({ image, title, des }) => (
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  sx={{
                    color: "#000",
                    textWidth: "bold",
                    padding: "20px 40px",
                    marginRight: "20px",
                    textAlign: "center",
                    boxShadow: 0,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <img width="30%" src={image} alt="" />
                      <Typography
                        sx={{
                          marginBottom: "20px",
                          marginTop: "20px",
                          fontWeight: "bold",
                          color: "#565E69",
                        }}
                        variant="h6"
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{ marginBottom: "20px", color: "#B4B4B4" }}
                        variant="body1"
                      >
                        {des}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default OurServices;
