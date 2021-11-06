import { Typography, Button, Grid, Container, Divider } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import footerBg from "../../../Images/footer-bg.png";
import { GradientButton } from "../../Home/MUiStyled/GradientButton";

const Footer = () => {
  const IconButton = styled(Button)({
    borderRadius: "50%",
    padding: "22px",
    marginRight: "20px",
    marginTop: "50px",
    outline: "1px solid #6ACECE",
    color: "#6ACECE",
    "&:hover": {
      backgroundColor: "#6ACECE",
      color: "#fff",
    },
  });
  return (
    <Box
      style={{
        marginTop: "100px",
        textAlign: "center",
        background: `url(${footerBg})`,
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ mt: "70px" }}>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Emergency Dental Care
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Treatment of Personal
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Tooth Extraction
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#5FC7C7",
                display: "block",
                mb: "30px",
              }}
            >
              Services
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Emergency Dental Care
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Treatment of Personal
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Tooth Extraction
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#5FC7C7",
                display: "block",
                mb: "30px",
              }}
            >
              Oral Health
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Emergency Dental Care
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Treatment of Personal
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Tooth Extraction
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              Check Up
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                color: "#5FC7C7",
                display: "block",
                mb: "30px",
              }}
            >
              Our Address
            </Button>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#848B9F",
                display: "block",
              }}
            >
              New York - 101010 Hudson Yards
            </Typography>

            <IconButton variant="text">
              <i className="fab fa-facebook-f" style={{ fontSize: "18px" }}></i>
            </IconButton>
            <IconButton variant="text">
              <i
                className="fab fa-google-plus-g"
                style={{ fontSize: "15px" }}
              ></i>
            </IconButton>
            <IconButton variant="text">
              <i className="fab fa-twitter" style={{ fontSize: "18px" }}></i>
            </IconButton>

            <Box sx={{ mt: "70px" }}>
              <Typography
                variant="text"
                sx={{
                  display: "block",
                  fontWeight: "bold",
                  color: "#848B9F",
                  textAlign: "start",
                  mb: "10px",
                }}
              >
                Call Now
              </Typography>
              <GradientButton sx={{ display: "block" }}>
                +202550295
              </GradientButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: "100px", mb: "20px" }}>
          <Divider sx={{ mb: "20px" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: "#848B9F",
              display: "block",
            }}
          >
            <i className="far fa-copyright"></i> Design By{" "}
            <span style={{ color: "#19D3AE" }}>J.N.Erfan</span>
            {"  "}
            With Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
