import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import getPublicPath from "../../utils/getPublicPath";

const styles = {
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  mobileRoot: {
    padding: "0 10px",
    display: {
      md: "none",
    },
  },
  slogan: {
    height: 283,
  },
  mobileSweater: {
    width: "100%",
  },
  desktopRoot: {
    padding: "140px 170px",
    display: {
      xs: "none",
      md: "flex",
    },
  },
  desktopSweater: {
    width: "100%",
  },
  desktopSpacing: {
    marginLeft: "17px",
  },
  desktopAbout: {
    width: "100%",
    borderRadius: "50%",
    border: "1px dashed #C5C5C5",
    aspectRatio: "1/1",
  },
};

const About = () => {
  const mobile = (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={styles.mobileRoot}
    >
      <Grid item>
        <Box
          component="img"
          src={getPublicPath("/images/slogan.svg")}
          alt="slogan"
          sx={{ ...styles.image, ...styles.slogan }}
        />
      </Grid>
      <Grid item container spacing={1}>
        <Grid item xs={6}>
          <Box
            component="img"
            src={getPublicPath("/images/image4.svg")}
            alt="sweater"
            sx={{ ...styles.image, ...styles.mobileSweater }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            component="img"
            src={getPublicPath("/images/image5.svg")}
            alt="sweater"
            sx={{ ...styles.image, ...styles.mobileSweater }}
          />
        </Grid>
      </Grid>
      <Grid item sx={{ marginTop: "47px" }} id="about">
        <Typography fontSize={24} component="h2" color="black">
          About
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: "18px", padding: "0 15px" }}>
        <Typography fontSize={13} color="#505A5F">
          着るだけで心が満たされていくそんなセーターを作るためにセーターだけを販売するOnly
          Sweaterを立ち上げました。
          <br />
          冬の季節にしか着ないセーターだけれど、
          <br />
          少しこだわるだけで今年の冬を特別なものにしてもらえるように細部までこだわって作りました。
          <br />
          あなたの冬が特別なものになりますように...
        </Typography>
      </Grid>
      <Grid item>
        <Link
          underline="always"
          color="inherit"
          lineHeight={"39px"}
          sx={{ paddingBottom: "6px", textUnderlineOffset: 6 }}
          fontFamily="Baskerville"
          fontSize={16}
          href="#about-more"
        >
          &nbsp;&nbsp;View more→&nbsp;&nbsp;
        </Link>
      </Grid>
    </Grid>
  );

  const desktop = (
    <Grid container sx={styles.desktopRoot} wrap="nowrap">
      <Grid item xs={6}>
        <Box
          component="img"
          src={getPublicPath("/images/image4.svg")}
          alt="sweater"
          sx={{ ...styles.image, ...styles.desktopSweater }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        container
        direction="column"
        sx={styles.desktopSpacing}
        justifyContent="center"
      >
        <Grid
          item
          sx={styles.desktopAbout}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography fontSize={24} component="h2" color="black">
              About
            </Typography>
          </Grid>
          <Grid item sx={{marginTop: "50px"}}>
            <Typography fontSize={16} color="#505A5F">
              着るだけで心が満たされていくそんなセーターを作るために
              <br />
              セーターだけを販売するOnly Sweaterを立ち上げました。
              <br />
              <br />
              冬の季節にしか着ないセーターだけれど、
              <br />
              少しこだわるだけで今年の冬を特別なものにしてもらえるように
              <br />
              細部までこだわって作りました。
              <br />
              <br />
              あなたの冬が特別なものになりますように...
              <br />
              <Link
                underline="always"
                color="#000000"
                lineHeight={"39px"}
                sx={{ paddingBottom: "6px", textUnderlineOffset: 6}}
                fontFamily="Baskerville"
                fontSize={16}
                href="#about-more"
              >
                &nbsp;&nbsp;View more→&nbsp;&nbsp;
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return <>
  {mobile}
  {desktop}
  </>
};

export default About;
