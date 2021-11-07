import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Container, TextField } from "@mui/material";
import { GradientButton } from "../../Home/MUiStyled/GradientButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  pb: 5,
  width: "70%",
  borderRadius: "20px",
};

const ModalForm = ({ open, handleClose, name, time, date }) => {
  return (
    <Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#1CC7C1",
                textAlign: "center",
                mb: "50px",
              }}
            >
              {name}
            </Typography>
            <form onSubmit={handleClose}>
              <Container maxWidth="sm">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  value={time}
                  disabled
                  sx={{ my: "10px" }}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Patient Name"
                  variant="outlined"
                  sx={{ my: "10px" }}
                  type="name"
                  required
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  sx={{ my: "10px" }}
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  sx={{ my: "10px" }}
                  type="number"
                  required
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ my: "10px" }}
                  value={date.toDateString()}
                  disabled
                />
                <GradientButton type="submit" sx={{ mt: "15px" }} fullWidth>
                  Booking
                </GradientButton>
              </Container>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ModalForm;
