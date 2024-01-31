import React from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Container from "@mui/material/Container";
import '@fontsource/ubuntu/500.css';
import '../css/App.css'


let theme = createTheme({
  palette: {
    primary: {
      main: "#07745e",
      dark:"#004836",
      darker:"#036450",
      light:"#80c8ba",
      lighter:"#dff1ef",
    },
    secondary:{
      main: "#a4241c"
    },
  },
  bgcolor: "#f5f5f5",
  textTransform: "none",
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    color:'primary.lighter'
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Container sx={{bgcolor:'#f5f5f5'}}>
        <AppBar position="static">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
            <Button component={Link} to="/bio" size="large" variant="contained" color="primary" sx={{m:1, textTransform: "none"}}>
                <Typography variant="h3">
                pat kupcha
                </Typography>
              </Button>
            </Typography>
            <Button variant="contained" component={Link} size="large" to="/projects" sx={{m:1, textTransform: "none"}}>
              projects
            </Button>
            <Button variant="contained" component={Link} to="/contact" size="large" sx={{m:1, textTransform: "none"}}>
              contact
            </Button>
          </Toolbar>
        </AppBar>

        <Outlet />
        </Container>
      </ThemeProvider>
  );
}

export default App;
