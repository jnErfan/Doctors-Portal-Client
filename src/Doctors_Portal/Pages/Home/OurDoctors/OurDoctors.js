import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { doctors } from "../../../Data/Data";
import PhoneIcon from "@mui/icons-material/Phone";
import { GradientButton } from "../MUiStyled/GradientButton";
import { useHistory } from "react-router";

const OurDoctors = () => {
  const history = useHistory();
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: "#5FC7C7",
            fontWeight: "600",
            marginTop: "30px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          OUR DOCTORS
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: "30px" }}>
          {doctors.map(({ image, name, number }) => (
            <Grid item xs={12} md={4} lg={4} key={number}>
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
                <Box sx={{ padding: "20px" }}>
                  <img width="100%" src={image} alt="" />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      marginBottom: "20px",
                      marginTop: "20px",
                      fontWeight: "bold",
                      color: "#3C3C3E",
                    }}
                    variant="h6"
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: "20px",
                      marginTop: "20px",
                      fontWeight: "bold",
                      color: "#B3B2B5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variant="body1"
                  >
                    <PhoneIcon
                      sx={{
                        color: "#5FC7C7",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    />{" "}
                    {number}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: "150px", display: "flex", justifyContent: "center" }}>
        <GradientButton
          onClick={() => history.push("/contract")}
          variant="contained"
        >
          CONTRACT US
        </GradientButton>
      </Box>
    </Container>
  );
};

export default OurDoctors;
