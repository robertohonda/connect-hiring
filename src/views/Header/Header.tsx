import { Box, Grid, Theme } from "@mui/material";
import React from "react";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

const styles = {
  image: {
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  mobileImage: {
    backgroundImage: `url('${
      process.env.PUBLIC_URL + "/images/image2_mobile.svg"
    }')`,
    display: {
      md: "none",
    },
  },
  desktopRoot: {
    display: {
      xs: "none",
      md: "flex",
    },
    height: 600,
    paddingTop: (theme: Theme) => theme.spacing(4),
    paddingLeft: (theme: Theme) => theme.spacing(2),
    paddingRight: (theme: Theme) => theme.spacing(2),
  },
  desktopImage1: {
    backgroundImage: `url('${process.env.PUBLIC_URL + "/images/image1.svg"}')`,
  },
  desktopSlogan: {
    backgroundImage: `url('${process.env.PUBLIC_URL + "/images/slogan.svg"}')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    transform: "scale(2)",
  },
  desktopImage2: {
    backgroundImage: `url('${process.env.PUBLIC_URL + "/images/image2.svg"}')`,
  },
  desktopImage3: {
    backgroundImage: `url('${process.env.PUBLIC_URL + "/images/image3.svg"}')`,
  },
};

const Header = () => {
  const mobile = <Box sx={{ ...styles.image, ...styles.mobileImage }} component="header"/>;

  const desktop = (
    <Grid container alignItems="flex-end" sx={styles.desktopRoot} component="header">
      <Grid item xs={4} height="100%">
        <Box sx={{ ...styles.image, ...styles.desktopImage1 }} />
      </Grid>
      <Grid item xs={4} height="100%" container direction="column">
        <Grid item xs={3} overflow="hidden">
          <Box sx={{ ...styles.image, ...styles.desktopSlogan }} />
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ ...styles.image, ...styles.desktopImage2 }} />
        </Grid>
      </Grid>
      <Grid item xs={4} height="100%">
        <Box sx={{ ...styles.image, ...styles.desktopImage3 }} />
      </Grid>
    </Grid>
  );

  return (
    <>
      {mobile}
      {desktop}
      <SectionDivider text="新規登録で１０％オフキャンペーン実施中！"/>
    </>
  );
};

export default Header;
