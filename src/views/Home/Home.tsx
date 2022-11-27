import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import Drawer from "../../components/Drawer/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
    fontFamily: 'Noto Serif JP, Baskerville',
    h1: {
      fontFamily: "Baskerville",
    },
    button: {
      fontFamily: "Baskerville",
    },
  },
});

function Home() {
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
      <Drawer open={drawerOpen} />
      <main style={{ height: "100%", width: "100%" }}>
        <div
          style={{
            height: "100%",
            backgroundImage: `url('${
              process.env.PUBLIC_URL + "/images/image1.svg"
            }')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </main>
    </ThemeProvider>
  );
}

export default Home;
