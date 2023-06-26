import { styled } from "..";

export const Input = styled("input", {
  width: "100%",
  padding: "8px",
  backgroundColor: "$light-dark",
  color: "white",
  borderRadius: "8px",
  "&:focus": {
    outline: "none",
  },
});
