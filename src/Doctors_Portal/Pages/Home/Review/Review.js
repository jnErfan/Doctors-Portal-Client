import { Typography, Container, Paper, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { review } from "../../../Data/Data";

const Review = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h6" sx={{ color: "#6ACECE", fontWeight: "bold" }}>
          TESTIMONIAL
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#203047",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          What's Our Patients <br /> Says
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ marginTop: "30px" }}>
        {review.map(({ image, name, from, description }) => (
          <Grid item xs={12} md={4} lg={4} key={name}>
            <Paper
              sx={{
                color: "#000",
                textWidth: "bold",
                padding: "20px 40px",
                marginRight: "20px",
                textAlign: "center",
              }}
              elevation={3}
            >
              <Typography variant="h6" sx={{ color: "#8F8C9B" }}>
                {description}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <img width="100%" src={image} alt="" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        marginBottom: "20px",
                        marginTop: "20px",
                        fontWeight: "bold",
                        color: "#5FC7C7",
                      }}
                      variant="h6"
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{ marginBottom: "20px", color: "#B4B4B4" }}
                      variant="body1"
                    >
                      {from}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
