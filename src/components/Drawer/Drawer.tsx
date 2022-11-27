import React from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "../Grid/Grid";
import Link from "../Link/Link";

interface CustomDrawerProps {
  open: boolean;
}

const styles = {
  root: {
    ".MuiPaper-root": {
      height: "100%",
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(2.5px)",
    },
  },
  container: {
    height: "100%"
  }
};

const CustomDrawer = ({ open }: CustomDrawerProps) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      sx={{...styles.root}}
      transitionDuration={400}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ ...styles.container }}
      >
        <Grid item container direction="column" alignItems="center" spacing={6}>
          <Grid item>
            <Link
              href="#text-buttons"
              fontFamily="Baskerville"
              color="#505B5F"
              fontSize="20px"
              underline="none"
            >
              About
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#text-buttons"
              fontFamily="Baskerville"
              color="#505B5F"
              fontSize="20px"
              underline="none"
            >
              Item
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#text-buttons"
              fontFamily="Baskerville"
              color="#505B5F"
              fontSize="20px"
              underline="none"
            >
              Shop
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#text-buttons"
              fontFamily="Baskerville"
              color="#505B5F"
              fontSize="20px"
              underline="none"
            >
              Press
            </Link>
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <Link
              href="#text-buttons"
              fontFamily="Baskerville"
              color="#505B5F"
              fontSize="14"
              underline="none"
            >
              Tel: 0312345678
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#text-buttons"
              fontFamily="Baskerville"
              color="#505B5F"
              fontSize="14"
              underline="none"
            >
              Email: onlysweater@jp.com
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default CustomDrawer;
