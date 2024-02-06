import React from "react";
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
import './css/index.css';
import { useRouteError, Link } from "react-router-dom";
import Card from '@mui/material/Card'

let theme = createTheme({
  palette: {
    primary: {
      main: "#07745e",
      dark: "#004836",
      darker: "#036450",
      light: "#80c8ba",
      lighter: "#dff1ef",
    },
    secondary: {
      main: "#a4241c",
    },
  },
  textTransform: "none",
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    color: "primary.lighter",
  },
});
theme = responsiveFontSizes(theme);

  
  export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/" size="large" variant="contained" color="primary" sx={{m:1, textTransform: "none"}}>
              home
            </Button>
          </Typography>
          <Button variant="contained" component={Link} to="/bio" size="large" sx={{m:1, textTransform: "none"}}>
            bio
          </Button>
          <Button variant="contained" component={Link} size="large" to="/projects" sx={{m:1, textTransform: "none"}}>
            projects
          </Button>
          <Button variant="contained" component={Link} to="/contact" size="large" sx={{m:1, textTransform: "none"}}>
            contact
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
      <Card raised='true' sx={{m:10, p:5, textAlign:'center'}}>
      <Typography variant='h3' sx={{m:2, p:1}}>
      This page doesn't exist.
      </Typography>
      <Typography variant='h5' sx={{m:2, p:1}}>
        You'll have to try again, friend.
      </Typography>
        
      </Card>
      </Container>
      </Container>
      </ThemeProvider>
  );
}