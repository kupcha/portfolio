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
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import SouthIcon from "@mui/icons-material/South";
import TerminalTwoToneIcon from "@mui/icons-material/TerminalTwoTone";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import SchoolIcon from "@mui/icons-material/School";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";

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
      <Container maxWidth="lg" disableGutters sx={{ justifyContent: "center" }}>

      <Stack
      display='inline'
      alignItems='center'>
        {/* I AM PAPER */}
        <Paper
          elevation={5}
          sx={{
            p: 1,
            my:3,
            bgcolor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" m={1} sx={{ textAlign: "left" }}>
            i am...
          </Typography>

          <Box>
            <Stack
              direction="row"
              p={2}
              sx={{
                typography: {
                  textAlign: "center",
                },
                m: 0.5,
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ m: 1, p: 1 }}>
                <List sx={{ m: 0, p: 0 }}>
                  <ListItem sx={{ m: 0, p: 1 }}>
                    <ListItemText>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Doctor of Pharmacy
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Typography
                    bgcolor="primary.light"
                    variant="h1"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "primary.darker",
                    }}
                  >
                    <LocalPharmacyIcon fontSize="inherit" />
                  </Typography>
                  <Typography bgcolor="primary.lighter">
                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
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
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bolder", textAlign: "center" }}
                        >
                          2009 - 2015
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Typography>
                </List>
              </Box>
              <Box sx={{ m: 1, p: 1 }}>
                <List sx={{ m: 0, p: 0 }}>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography
                        variant="h3"
                        p={1}
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Software Engineer
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <Typography
                    bgcolor="primary.light"
                    variant="h1"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "primary.darker",
                    }}
                  >
                    <TerminalTwoToneIcon fontSize="inherit" />
                  </Typography>
                  <Typography bgcolor="primary.lighter">
                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
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
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bolder", textAlign: "center" }}
                        >
                          2018 - 2020
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Typography>
                </List>
              </Box>
            </Stack>
          </Box>
        </Paper>

        {/* MY MISSION PAPER */}
        <Paper elevation={5} sx={{ my: 3, p: 1, bgcolor: "#f5f5f5" }}>
        <Typography variant="h2" m={1} sx={{ textAlign: "left" }}>
            my mission...
          </Typography>
          <Box m={1} p={7}>
            <Typography variant="h3" pb={2} sx={{ textAlign: "center" }}>
              after <span style={{ color: "#07745e" }}>10 years</span> as a{" "}
              <span style={{ color: "#07745e" }}>community pharmacist</span>,
            </Typography>
            <Typography variant="h3" p={2} sx={{ textAlign: "center" }}>
              i am once again seeking a role as a
            </Typography>
            <Typography variant="h3" p={2} sx={{ textAlign: "center" }}>
              <span style={{ color: "#a4241c" }}>software developer</span>.
            </Typography>

            <Typography variant="h3" p={2} sx={{ textAlign: "center" }}>
              i am highly motivated to leverage and further develop my technical
              expertise to create something worthwhile.
            </Typography>
          </Box>
        </Paper>

        {/* CAREER SO FAR... */}
        <Paper elevation={5} sx={{ my: 3, p: 1, bgcolor: "#f5f5f5" }}>
        <Typography variant="h2" m={1} sx={{ textAlign: "left" }}>
            my career so far...
          </Typography>
          <br />
          <List
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* graduation card */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Card
                elevation={3}
                sx={{
                  p: 2,
                  m: 1,
                  display: "inline",
                  typography: { textAlign: "center" },
                  bgcolor: "#f5f5f5",
                }}
              >
                <Typography variant="h3">
                  <SchoolIcon sx={{ fontSize: "inherit" }} />
                </Typography>
                <Typography variant="h5">Graduated as</Typography>
                <Typography variant="h4">Doctor of Pharmacy</Typography>
                <Typography variant="h5">May 2015</Typography>
              </Card>
            </ListItem>

            {/* arrow down */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <SouthIcon sx={{ m: 0.5, p: 1 }} />
              </Typography>
            </ListItem>

            {/* STAFF PHARMACIST WALGREENS CARD  */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Card
                elevation={3}
                sx={{
                  p: 2,
                  m: 1,
                  display: "inline",
                  typography: { textAlign: "center" },
                  bgcolor: "#f5f5f5",
                }}
              >
                <List sx={{ m: 0, px: 5, py: 2 }}>
                  <img
                    alt="walgreens logo"
                    src="../walgreens-logo-2015.png"
                    style={{
                      maxWidth: "362px",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  />

                  <ListItem sx={{ m: 0, p: 1 }}>
                    <ListItemText>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Staff Pharmacist
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        at Walgreens Pharmacy
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Millsboro, DE
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h4" sx={{ textAlign: "center" }}>
                        <Typography>July 2015</Typography>
                        <Typography>to</Typography>
                        <Typography>August 2018</Typography>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Card>
            </ListItem>

            {/* arrow down */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <SouthIcon sx={{ m: 0.5, p: 1 }} />
              </Typography>
            </ListItem>

            {/* DOUBLE STACK CARD */}
            <ListItem
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                spacing={5}
                direction={{ xs: "column", sm: "row", md: "row" }}
                p={0}
                sx={{
                  typography: {
                    textAlign: "center",
                  },
                  justifyContent: "space-evenly",
                }}
              >
                {/* shoprite card */}
                <Card
                  elevation={5}
                  sx={{
                    p: 2,
                    m: 1,
                    display: "inline",
                    typography: { textAlign: "center" },
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <List sx={{ m: 0, px: 0, py: 2 }}>
                    <img
                      alt="shoprite rx logo"
                      src="../ShopRite_logo_PNG_(3).png"
                      style={{ width: "100%", maxWidth: "135px" }}
                    />

                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography
                          variant="h4"
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          Pharmacist
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                          ShopRite Pharmacy
                        </Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          Mount Laurel, NJ
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          <Typography>August 2018</Typography>
                          <Typography>to</Typography>
                          <Typography>May 2021</Typography>
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Card>

                {/* student card */}
                <Card
                  elevation={5}
                  sx={{
                    p: 2,
                    m: 1,
                    display: "inline",
                    typography: { textAlign: "center" },
                    bgcolor: "#f5f5f5",
                  }}
                >
                  <List sx={{ m: 0, px: 0, py: 2 }}>
                    <img
                      alt="rutgers logo"
                      src="../r-logo.png"
                      style={{ width: "100%", maxWidth: "135px" }}
                    />

                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography
                          variant="h4"
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          Student
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                          Computer Science
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          Rutgers University
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem sx={{ m: 0, p: 0 }}>
                      <ListItemText>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                          <Typography>August 2018</Typography>
                          <Typography>to</Typography>
                          <Typography>December 2020</Typography>
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Card>
              </Stack>
            </ListItem>

            {/* down arrow */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <SouthIcon sx={{ m: 0.5, p: 1 }} />
              </Typography>
            </ListItem>

            {/* comp sci graduation */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Card
                elevation={5}
                sx={{
                  p: 5,
                  m: 1,
                  display: "inline",
                  whiteSpace: "none",
                  typography: { textAlign: "center" },
                  bgcolor: "#f5f5f5",
                }}
              >
                <Typography variant="h3">
                  <SchoolIcon sx={{ fontSize: "inherit" }} />
                </Typography>
                <Typography variant="h5">Graduated with a</Typography>
                <Typography variant="h4">Bachelor's Degree</Typography>
                <Typography variant="h4">Computer Science</Typography>
                <Typography variant="h5">December 2020</Typography>
              </Card>
            </ListItem>

            {/* down arrow */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <SouthIcon sx={{ m: 0.5, p: 1 }} />
              </Typography>
            </ListItem>

            {/* BAE systems */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Card
                elevation={5}
                sx={{
                  p: 3,
                  m: 1,
                  display: "inline",
                  whiteSpace: "none",
                  typography: { textAlign: "center" },
                  bgcolor: "#f5f5f5",
                }}
              >
                <List sx={{ m: 0, px: 5, py: 2 }}>
                  <img
                    alt="baelogo"
                    src="../baelogo.png"
                    style={{
                      maxWidth: "362px",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  />

                  <ListItem sx={{ m: 0, p: 1 }}>
                    <ListItemText>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Software Engineer I
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        at BAE Systems
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Totowa, NJ
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h4" sx={{ textAlign: "center" }}>
                        <Typography>May 2021</Typography>
                        <Typography>to</Typography>
                        <Typography>December 2021</Typography>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Card>
            </ListItem>

            {/* down arrow */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <SouthIcon sx={{ m: 0.5, p: 1 }} />
              </Typography>
            </ListItem>


            {/* HILLSBOROUGH WALGREENS */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Card
                elevation={5}
                sx={{
                  p: 3,
                  m: 1,
                  display: "inline",
                  whiteSpace: "none",
                  typography: { textAlign: "center" },
                  bgcolor: "#f5f5f5",
                }}
              >
                <List sx={{ m: 0, px: 5, py: 2 }}>
                  <img
                    alt="walgreens logo"
                    src="../walgreens-logo-2024.png"
                    style={{
                      maxWidth: "362px",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  />

                  <ListItem sx={{ m: 0, p: 1 }}>
                    <ListItemText>
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: "bolder", textAlign: "center", m: 1 }}
                      >
                        Staff Pharmacist
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h5" sx={{ textAlign: "center" }}>
                        at Walgreens Pharmacy
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Hillsborough, NJ
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem sx={{ m: 0, p: 0 }}>
                    <ListItemText>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        <Typography>December 2021</Typography>
                        <Typography>to</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Current
                        </Typography>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Card>
            </ListItem>

            {/* down arrow */}
            <ListItem sx={{ justifyContent: "center" }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <SouthIcon sx={{ m: 0.5, p: 1 }} />
              </Typography>
            </ListItem>

            <ListItem sx={{ justifyContent: "center" }}>
              <Card
                elevation={5}
                sx={{
                  p: 3,
                  m: 1,
                  display: "inline",
                  whiteSpace: "none",
                  typography: { textAlign: "center" },
                  bgcolor: "#f5f5f5",
                }}
              >
                <Typography variant="h1">
                  <NotListedLocationIcon sx={{ fontSize: "inherit" }} />
                </Typography>
              </Card>
            </ListItem>
          </List>
        </Paper>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Bio;
