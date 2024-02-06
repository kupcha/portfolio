import {
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

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

const Projects = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ height: "90vh" }}>
        {/* <Stack my={2} direction="column" spacing={5}>
          <Paper elevation={5}>
              <div
                className="github-card"
                data-github="kupcha/portfolio"
                data-width="400"
                data-height=""
                data-theme="default"
              ></div>
              <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
          </Paper>
          <Paper elevation={5}>
            <Box>this will display project #2</Box>
          </Paper>
        </Stack> */}
      </Container>
    </ThemeProvider>
  );
};
export default Projects;
