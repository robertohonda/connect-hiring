import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import Drawer from "../../components/Drawer/Drawer";
import Box from "../../components/Box/Box";
import Toolbar from "../../components/Toolbar/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../Header/Header";
import About from "../About/About";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F5B05F",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Noto Serif JP, Baskerville",
    h1: {
      fontFamily: "Baskerville",
    },
    h6: {
      fontFamily: "Baskerville",
    },
    button: {
      fontFamily: "Baskerville",
    },
  },
});

const styles = {
  root: {
    height: "100%",
    width: "100%",
  },
};

const Home = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        drawerOpen={drawerOpen}
        onOpenDrawer={handleDrawerOpen}
        onCloseDrawer={handleDrawerClose}
      />
      <Toolbar />
      <Drawer open={drawerOpen} />
      <Box component="main" sx={styles.root}>
        <Header />
        <About />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
