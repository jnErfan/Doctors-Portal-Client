import React from "react";
import { PhotoCamera, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import signIn from "../../Images/signUp.png";
import { GradientButton } from "../Home/MUiStyled/GradientButton";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import NavBaar from "../Shared/NavBaar/NavBaar";

const SignUp = () => {
  const SocialIconButton = styled(Button)({
    borderRadius: "50%",
    padding: "15px",
    marginRight: "20px",
    marginTop: "50px",
    outline: "1px solid #6ACECE",
    color: "#6ACECE",
    "&:hover": {
      backgroundColor: "#6ACECE",
      color: "#fff",
    },
  });
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
  const history = useHistory();
  const location = useLocation();
  const { error, emailPasswordSignUp, googleSignIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const fullName = data.fastName + " " + data.lastName;
    emailPasswordSignUp(
      data.email,
      data.password,
      history,
      location,
      fullName,
      data.image
    );
  };

  const handleGoogleSignIn = () => {
    googleSignIn(history, location);
  };

  return (
    <>
      <NavBaar />
      <Container sx={{ marginTop: "100px" }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mb: "50px" }}>
              <Container maxWidth="sm">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#686868",
                    textAlign: "center",
                    mt: "50px",
                  }}
                >
                  Sign Up
                </Typography>

                <form
                  style={{
                    marginTop: "50px",
                  }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Container maxWidth="sm">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                      <PhotoCamera
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                      />
                      <TextField
                        type="url"
                        fullWidth
                        id="input-with-sx"
                        label="Your Image Url"
                        variant="standard"
                        sx={{ display: "block", mt: "20px" }}
                        {...register("image")}
                        required
                      />
                    </Box>

                    <TextField
                      fullWidth
                      type="name"
                      id="standard-textarea"
                      label="First Name"
                      placeholder="Your First Name"
                      multiline
                      variant="standard"
                      sx={{ display: "block", mt: "20px" }}
                      {...register("fastName")}
                      required
                    />
                    <TextField
                      fullWidth
                      type="name"
                      id="standard-textarea"
                      label="Last Name"
                      placeholder="Your Last Name"
                      multiline
                      variant="standard"
                      sx={{ display: "block", mt: "20px" }}
                      {...register("lastName")}
                      required
                    />
                    <TextField
                      fullWidth
                      type="email"
                      id="input-with-sx"
                      label="Enter New Email Address"
                      variant="standard"
                      sx={{ display: "block", mt: "20px" }}
                      {...register("email")}
                      required
                    />
                    <FormControl
                      sx={{ display: "block", mt: "20px" }}
                      variant="standard"
                    >
                      <InputLabel htmlFor="standard-adornment-password">
                        New Password
                      </InputLabel>
                      <Input
                        sx={{ width: "100%" }}
                        required
                        {...register("password")}
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
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <TextField
                      fullWidth
                      type="password"
                      id="standard-password-input"
                      label="Confirm Password"
                      placeholder="Password"
                      autoComplete="current-password"
                      variant="standard"
                      sx={{ display: "block", mt: "20px" }}
                      {...register("password2")}
                      required
                    />
                    <Typography
                      variant="body2"
                      sx={{ my: "10px", color: "red" }}
                    >
                      {error}
                    </Typography>

                    <GradientButton
                      type="submit"
                      sx={{ py: "10px", width: "100%", mt: "20px" }}
                    >
                      Sign Up
                    </GradientButton>
                    <Box sx={{ textAlign: "center", mt: "15px" }}>
                      <Button variant="text" sx={{ fontWeight: "bold" }}>
                        You Have An Account ?
                        <Link style={{ marginLeft: "15px" }} to="/login">
                          Login
                        </Link>
                      </Button>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <SocialIconButton
                        onClick={handleGoogleSignIn}
                        variant="text"
                      >
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
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img width="100%" src={signIn} alt="" />
            </Grid>
          </Grid>
        </Box>
        ;
      </Container>
    </>
  );
};

export default SignUp;
