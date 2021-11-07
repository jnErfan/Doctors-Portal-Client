import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { blogsSection } from "../../../Data/Data";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Blogs = () => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box>
        <Typography
          variant="h6"
          sx={{ color: "#5FC7C7", fontWeight: "bold", textAlign: "center" }}
        >
          OUR BLOG
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "500",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "90px",
          }}
        >
          From Our Blogs News
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: "30px" }}>
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              color: "#fff",
              textWidth: "bold",
              padding: "20px 40px",
              marginRight: "20px",
              background: "linear-gradient(90deg,#19D3AE,#0FCFEC)",
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                marginTop: "20px",
              }}
              variant="h6"
            >
              Rashed Kabir
            </Typography>
            <Typography
              sx={{
                marginBottom: "30px",
                marginTop: "5px",
              }}
              variant="body1"
            >
              22 Aug 2018
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
                marginTop: "20px",
                fontWeight: "bold",
              }}
              variant="h5"
            >
              Check at least a doctor in a year for your teeth
            </Typography>
            <ArrowRightAltIcon sx={{ fontSize: "70px", marginTop: "60px" }} />
          </Paper>
        </Grid>
        {blogsSection.map(({ image, name, date, title, description }) => (
          <Grid item xs={12} md={4} lg={4} key={name}>
            <Paper
              sx={{
                color: "#000",
                textWidth: "bold",
                padding: "20px 40px",
                marginRight: "20px",
                textAlign: "center",
              }}
            >
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
                      }}
                      variant="body1"
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{ marginBottom: "20px", color: "#B4B4B4" }}
                      variant="body1"
                    >
                      {date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  fontWeight: "bold",
                  color: "#3C3C3E",
                  textAlign: "start",
                }}
                variant="h6"
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  color: "#B4B4B4",
                  textAlign: "start",
                }}
                variant="body1"
              >
                {description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
