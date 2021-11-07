import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {};

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <div>
          <h1>
            <span style={{ color: "orangered" }}>ADMIN</span> PANEL
          </h1>

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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
