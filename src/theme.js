import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: { primary: { main: "#0d47a1" }, secondary: { main: "#ff6f00" }, background: { default: "#f7f9fc" } },
  shape: { borderRadius: 12 }, typography: { fontFamily: "'Inter', 'Roboto', sans-serif" }
});
export default theme;
