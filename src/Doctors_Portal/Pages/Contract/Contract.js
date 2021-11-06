import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import appointment from "../../Images/appointment-bg.png";
import { GradientButton } from "../Home/MUiStyled/GradientButton";

const Contract = () => {
  return (
    <Box
      fluis
      sx={{
        mt: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWidth: "bold",
            borderBottom: "5px solid #6ACECE",
            borderRadius: "15px",
            display: "inline-block",
            color: "#848B9F",
          }}
        >
          Contract Us
        </Typography>
      </Box>
      <Box
        sx={{
          background: `url(${appointment})`,
          backgroundColor: "#161616",
          backgroundSize: "130%",
          backgroundBlendMode: "overlay",
          py: "50px",
          mt: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "#6ACECE",
              marginTop: "0",
              textAlign: "center",
            }}
          >
            {" "}
            CONTRACT US
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "500", textAlign: "center", color: "#fff" }}
          >
            Always Connect With Us
          </Typography>
          <Container maxWidth="sm">
            <form>
              <TextField
                fullWidth
                sx={{
                  background: "#fff",
                  borderRadius: "5px",
                  mt: 5,
                }}
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                type="email"
                required
              />
              <TextField
                fullWidth
                sx={{
                  background: "#fff",
                  borderRadius: "5px",
                  mt: 5,
                }}
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                type="text"
                required
              />
              <TextField
                fullWidth
                sx={{
                  background: "#fff",
                  borderRadius: "5px",
                  mt: 5,
                }}
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={5}
                required
              />
              <Box sx={{ textAlign: "center" }}>
                <GradientButton
                  type="submit"
                  sx={{ px: "90px", py: "15px", mt: "20px" }}
                >
                  Submit
                </GradientButton>
              </Box>
            </form>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Contract;
