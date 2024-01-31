import React from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import SouthIcon from "@mui/icons-material/South";

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
  bgcolor: "#f5f5f5",
  textTransform: "none",
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    color: "primary.lighter",
  },
});
theme = responsiveFontSizes(theme);

const Bio = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ m: 1 }}>
        <Paper elevation={20} sx={{ m: 2, p: 2, bgcolor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h5" m={1} sx={{ textAlign: "left" }}>
              i am...
            </Typography>
            {/* <Typography variant="h1" m={4} sx={{ textAlign: "center" }}>
              Patrick Kupcha
            </Typography> */}
          </Container>
          <Container>
            <Stack
              direction="row"
              sx={{
                padding: theme.spacing(5),
                typography: {
                  textAlign: "center",
                },
                m: 0.5,
                justifyContent: "center",
              }}
            >
              <Container sx={{ my: 3, mx: 1, p: 1 }}>
                <List sx={{ m: 0, p: 0 }}>
                  <Typography variant="h1" sx={{ color: "primary.darker" }}>
                    <Icon icon="healthicons:medicine-mortar-outline" />
                  </Typography>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Doctor of Pharmacy
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Rutgers University
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Ernest Mario School of Pharmacy
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        2009 - 2015
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Container>
              <Container sx={{ my: 3, mx: 1, p: 1 }}>
                <List sx={{ m: 0, p: 0 }}>
                  <Typography variant="h1" sx={{ color: "primary.darker" }}>
                    <Icon icon="teenyicons:computer-solid" />
                  </Typography>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Software Engineer
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Rutgers University
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Bachelor's of Computer Science
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        2018 - 2020
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Container>
            </Stack>
          </Container>
        </Paper>
        <Paper elevation={20} sx={{ m: 2, p: 2, bgcolor: "#f5f5f5" }}>
        <Container>
          <Typography variant="h5" m={1} sx={{ textAlign: "left" }}>my mission...</Typography>
          
            <Card>
              <Typography variant="body1">/* fill with text */</Typography>
            </Card>
          </Container>
        </Paper>
        <Paper elevation={5} sx={{ m: 2, p: 2, bgcolor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h5" m={1} sx={{ textAlign: "left" }}>
              my career so far...
            </Typography>
            <br />
            <Container
              sx={{ justifyContent: "center", display: "inline-flex" }}
            >
              <Stack direction="column" sx={{ justifyContent: "center" }}>
                <Card
                  sx={{
                    p: 3,
                    m: 1,
                    display: "inline",
                    whiteSpace: "none",
                    typography: { textAlign: "center" },
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <img
                    alt="walgreens logo"
                    src="../walgreens-logo-2015.png"
                    style={{ maxWidth: "300px" }}
                  ></img>

                  <Typography variant="h3">Staff Pharmacist</Typography>
                  <Typography variant="h5">at Walgreens Pharmacy</Typography>
                  <Typography variant="h6">Millsboro, DE</Typography>
                  <Typography>July 2015</Typography>
                  <Typography>to</Typography>
                  <Typography>August 2018</Typography>
                </Card>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                  <SouthIcon sx={{ m: 0.5, p: 1 }} />
                </Typography>
                <Card
                  sx={{
                    p: 3,
                    m: 1,
                    display: "inline",
                    whiteSpace: "none",
                    typography: { textAlign: "center" },
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <Container>
                    <Stack justifyContent="center" direction="row">
                      <Box
                        sx={{
                          p: 3,
                          m: 1,
                          display: "inline",
                          whiteSpace: "none",
                          typography: { textAlign: "center" },
                        }}
                      >
                        <img
                          alt="shoprite rx logo"
                          src="../ShopRite_logo_PNG_(3).png"
                          style={{ maxWidth: "145px" }}
                        ></img>
                        <Typography variant="h3">Pharmacist</Typography>
                        <Typography variant="h5">
                          at ShopRite Pharmacy
                        </Typography>
                        <Typography variant="h6">Mount Laurel, NJ</Typography>
                        <Typography>August 2018</Typography>
                        <Typography>to</Typography>
                        <Typography>May 2021</Typography>
                      </Box>
                      <Box
                        sx={{
                          p: 3,
                          m: 1,
                          display: "inline",
                          whiteSpace: "none",
                          typography: { textAlign: "center" },
                        }}
                      >
                        <img
                          alt="rutgers logo"
                          src="../r-logo.png"
                          style={{ maxWidth: "145px" }}
                        ></img>
                        <Typography variant="h3">Student</Typography>
                        <Typography variant="h5">Computer Science</Typography>
                        <Typography variant="h6">
                          at Rutgers University
                        </Typography>
                        <Typography>August 2018</Typography>
                        <Typography>to</Typography>
                        <Typography>December 2020</Typography>
                      </Box>
                    </Stack>
                  </Container>
                </Card>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                  <SouthIcon sx={{ m: 0.5, p: 1 }} />
                </Typography>
                <Card
                  sx={{
                    p: 3,
                    m: 1,
                    display: "inline",
                    whiteSpace: "none",
                    typography: { textAlign: "center" },
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <img
                    alt="baelogo"
                    src="../baelogo.png"
                    style={{ maxWidth: "250px" }}
                  ></img>
                  <Stack direction="column" sx={{ p: 3, m: 1 }}>
                    <Typography variant="h3">Software Engineer</Typography>
                    <Typography variant="h5">at BAE Systems</Typography>
                    <Typography variant="h6">Totowa, NJ</Typography>
                    <Typography>May 2021</Typography>
                    <Typography>to</Typography>
                    <Typography>December 2021</Typography>
                  </Stack>
                </Card>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                  <SouthIcon sx={{ m: 0.5, p: 1 }} />
                </Typography>
                <Card
                  sx={{
                    p: 3,
                    m: 1,
                    display: "inline",
                    whiteSpace: "none",
                    typography: { textAlign: "center" },
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <img
                    alt="walgreens logo"
                    src="../walgreens-logo-2024.png"
                    style={{ maxWidth: "300px" }}
                  ></img>
                  <Typography variant="h3">Staff Pharmacist</Typography>
                  <Typography variant="h5">at Walgreens</Typography>
                  <Typography variant="h6">Hillsborough, NJ</Typography>
                  <Typography>December 2021</Typography>
                  <Typography>to</Typography>
                  <Typography fontWeight="bolder">Current</Typography>
                </Card>
              </Stack>
            </Container>
          </Container>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Bio;
