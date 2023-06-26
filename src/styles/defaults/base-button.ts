import { styled } from "..";

export const Button = styled("button", {
  width: "100%",
  padding: "8px",
  border: "none",
  borderRadius: "8px",
  transition: "0.2s ease",
  variants: {
    buttonType: {
      button: {
        backgroundColor: "$success",
        "&:hover": {
          filter: "brightness(0.9)",
        },
      },
      link: {
        background: "none",
        color: "orange",
        "&:hover": {
          filter: "brightness(0.9)",
          textDecoration: "underline",
        },
      },
      trashButton: {
        width: "auto",
        background: "none",
        color: "white",
        "&:hover": {
          color: "$error",
        },
      },
      signOutButton: {
        width: "auto",
        background: "none",
        color: "white",
        "&:hover": {
          filter: "brightness(0.9)",
        },
      },
    },
  },
});
