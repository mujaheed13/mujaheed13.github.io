import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#F5F5F5" },
    primary: { main: "#0D6EFD" },
    secondary: { main: "#0056D2" },
    text: { primary: "#212529" },
    accent: { main: "#FF6B6B" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0D1117" },
    primary: { main: "#58A6FF" },
    secondary: { main: "#1F6FEB" },
    text: { primary: "#C9D1D9" },
    accent: { main: "#F78166" },
  },
});
