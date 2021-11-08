import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.put("http://localhost:5000/makeAdmin", data).then((result) => {
      if (result.data.modifiedCount === 1) {
        reset();
        alert("Make User To Merchant Successful");
      } else if (
        result.data.modifiedCount === 0 &&
        result.data.matchedCount === 1
      ) {
        alert("This User Already Merchant");
      } else {
        alert("Make Merchant Failed");
      }
    });
    console.log(data);
  };
  return (
    <Box sx={{ mt: "100px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Make <span style={{ color: "orangered" }}>Merchant</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "50px",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            boxShadow: "1px 1px 5px #0B5D4D",
            padding: "50px",
            borderRadius: "20px",
          }}
        >
          <TextField
            fullWidth
            type="email"
            id="standard-basic"
            label="Merchant Email"
            variant="standard"
            {...register("email")}
            required
          />
          <FormControlLabel
            sx={{
              mt: "60px",
            }}
            control={<Switch />}
            label="Remove Merchant ?"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "orangered",
              fontWeight: "bold",
            }}
          >
            Make Merchant
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default MakeAdmin;
