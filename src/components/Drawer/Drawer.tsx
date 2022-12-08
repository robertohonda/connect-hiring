import React from "react";
import Grid from "../Grid/Grid";
import Link from "../Link/Link";
import IconButton from "../IconButton/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Fade } from "@mui/material";

interface CustomDrawerProps {
  open: boolean;
}

const styles = {
  container: {
    height: "100%",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(2.5px)",
    position: "fixed",
  },
};

const CustomDrawer = ({ open }: CustomDrawerProps) => {
  const linksSection = ["About", "Item", "Shop", "Press"].map((link) => (
    <Grid item key={link}>
      <Link
        href="#about"
        fontFamily="Baskerville"
        color="#505B5F"
        fontSize="20px"
        underline="none"
      >
        {link}
      </Link>
    </Grid>
  ));

  const contactSection = (
    <>
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
      <Grid item container justifyContent="center">
        <Grid item>
          <IconButton size="large">
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton size="large">
            <FacebookIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Fade
      in={open}
      timeout={400}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ ...styles.container }}
      >
        <Grid item container direction="column" alignItems="center" spacing={3}>
          {linksSection}
        </Grid>
        <Grid item container direction="column" alignItems="center" spacing={1}>
          {contactSection}
        </Grid>
      </Grid>
    </Fade>
  );
};

export default CustomDrawer;
