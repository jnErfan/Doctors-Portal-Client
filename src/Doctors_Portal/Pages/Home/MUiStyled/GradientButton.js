import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #19D3B0, #10D0E6)",
  color: "#fff",
  fontWeight: "bold",
  padding: "15px 30px",
  "&:hover": {
    background: "linear-gradient(90deg, #10D0E6 , #19D3B0)",
  },
}));
