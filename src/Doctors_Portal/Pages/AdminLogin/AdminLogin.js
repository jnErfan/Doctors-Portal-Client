import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useAuth from "../../Hooks/useAuth";

const AdminLogin = () => {
  const SocialIconButton = styled(Button)({
    borderRadius: "50%",
    padding: "15px",
    marginRight: "20px",
    marginTop: "50px",
    outline: "1px solid orangered",
    color: "orangered",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { error, emailPasswordLogin, googleSignIn, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const history = useHistory();
  const location = useLocation();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, history, location);
  };

  const handleGoogleAdminLogin = () => {
    googleSignIn(history, location);
  };

  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const resetPasswordHandler = () => {
    resetPassword(email);
    setOpen(false);
  };

  return (
    <Box sx={{ marginTop: "100px" }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#686868",
            textAlign: "center",
            mt: "100px",
          }}
        >
          <span style={{ color: "orangered" }}>ADMIN</span> LOGIN
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            marginTop: "50px",
          }}
        >
          <Container maxWidth="sm">
            <TextField
              fullWidth
              type="email"
              id="input-with-sx"
              label="Enter Email"
              variant="standard"
              sx={{ display: "block" }}
              {...register("email")}
              required
            />
            <FormControl
              sx={{ display: "block", mt: "20px" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                sx={{ width: "100%" }}
                {...register("password")}
                required
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Typography variant="body2" sx={{ mt: "10px", color: "red" }}>
              {error}
            </Typography>
            <Button
              onClick={handleClickOpen}
              variant="text"
              sx={{
                color: "blue",
                mt: "15px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Forget ?
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                py: "10px",
                width: "100%",
                mt: "20px",
                backgroundColor: "orangered",
              }}
            >
              Login Admin
            </Button>
            <Box sx={{ textAlign: "center", mt: "15px" }}>
              <Box>
                <Dialog open={open} onClose={handleClose}>
                  <form onSubmit={resetPasswordHandler}>
                    {" "}
                    <DialogContent>
                      <TextField
                        onBlur={handleBlur}
                        autoFocus
                        margin="dense"
                        label="Account Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        required
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button type="submit">Send Mail</Button>
                    </DialogActions>
                  </form>
                </Dialog>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <SocialIconButton onClick={handleGoogleAdminLogin} variant="text">
                <img
                  src="https://img.icons8.com/color/35/000000/google-logo.png"
                  alt=""
                />
              </SocialIconButton>
              <SocialIconButton variant="text">
                <img
                  src="https://img.icons8.com/color/35/000000/github.png"
                  alt=""
                />
              </SocialIconButton>
              <SocialIconButton variant="text">
                <img
                  src="https://img.icons8.com/fluency/35/000000/facebook-new.png"
                  alt=""
                />
              </SocialIconButton>
            </Box>
          </Container>
        </form>
      </Container>
      {/*  <Box>
        <Box>
         

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <TextField
              type="password"
              placeholder="Password"
              {...register("password")}
              required
            />
            <p className="">
              <small>{"error"}</small>
            </p>
            <input
              style={{ backgroundColor: "orangered" }}
              type="submit"
              value="Login"
            />
            <div>
              <p>__________ Or __________</p>
            </div>
          </form>
          <div>
            <button>
              <span>
                <img
                  src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  alt=""
                />
              </span>
              <span> Google Admin SignIn</span>
            </button>
          </div>
        </Box>
      </Box> */}
    </Box>
  );
};

export default AdminLogin;
