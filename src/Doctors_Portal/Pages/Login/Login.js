import { Visibility, VisibilityOff } from "@mui/icons-material";
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
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import login from "../../Images/login.png";
import { GradientButton } from "../Home/MUiStyled/GradientButton";
import NavBaar from "../Shared/NavBaar/NavBaar";

const Login = () => {
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
  const { error, emailPasswordLogin, googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, history, location);
    console.log(data);
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
                    mt: "100px",
                  }}
                >
                  Login
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
                    <Typography
                      variant="body2"
                      sx={{ mt: "10px", color: "red" }}
                    >
                      {error}
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        color: "#EB6960",
                        mt: "15px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Forget Your Password ?
                    </Button>
                    <GradientButton
                      type="submit"
                      sx={{ py: "10px", width: "100%", mt: "20px" }}
                    >
                      Login
                    </GradientButton>
                    <Box sx={{ textAlign: "center", mt: "15px" }}>
                      <Button variant="text" sx={{ fontWeight: "bold" }}>
                        You Have No Account ?
                        <Link style={{ marginLeft: "15px" }} to="/signup">
                          Sign Up
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
              <img width="100%" src={login} alt="" />
            </Grid>
          </Grid>
        </Box>
        ;
      </Container>
    </>
  );
};

export default Login;
