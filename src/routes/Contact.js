import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import StylishEmailIcon from "../styled/StylishEmailIcon.js";
import StyledGitHubIcon from "../styled/StyledGitHubIcon.js";
import ListItemIcon from "@mui/material/ListItemIcon";
import StyledLinkedInIcon from "../styled/StyledLinkedInIcon.js";

const email = "patkupcha@gmail.com";

let theme = createTheme({
  textTransform: "none",
  typography: {
    body1: {
      textAlign: "center",
    },
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#07745e",
    },
    secondary: {
      main: "#a4241c",
    },
  },
});

theme = responsiveFontSizes(theme);

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: "md",
            m: 15,
            p: 5,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h3>feel free to reach out to me!</h3>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h3", textAlign: "center", fontWeight:'bolder' }}
              >
                Patrick Kupcha
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h5", textAlign: "center", }}
              >
                PharmD, RPh
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h5", textAlign: "center", }}
              >
                Software Engineer
              </ListItemText>
            </ListItem>
            <ThemeProvider theme={theme}>
              <Stack
                direction="row"
                m={1}
                p={2}
                sx={{ justifyContent: "center" }}
              >
                <ListItemIcon>
                  <a
                    href="https://linkedin.com/in/patkupcha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLinkedInIcon sx={{ fontSize: "2.5rem" }} />
                  </a>
                </ListItemIcon>
                <ListItemIcon>
                  <a
                    href="https://github.com/kupcha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledGitHubIcon />
                  </a>
                </ListItemIcon>
                <ListItemIcon>
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    <StylishEmailIcon />
                  </a>
                </ListItemIcon>
              </Stack>
            </ThemeProvider>
          </List>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
