import React from "react";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Box from "../Box/Box";
import Toolbar from "../Toolbar/Toolbar";
import Link from "../Link/Link";
import Typography from "../Typography/Typography";
import IconButton from "../IconButton/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled, useTheme, Theme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import useMediaQuery from '@mui/material/useMediaQuery';

interface CustomAppBarProps {
  drawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
}

const styles = {
  box: {
    flexGrow: 1,
  },
  name: {
    flexGrow: 1,
  },
  logo:{
    height: {
      xs: "26px",
      md: "36px"
    },
  },
  mobileMenu: {
    display: {
      md: "none",
    },
  },
  desktopMenu: {
    display: {
      xs: "none",
      md: "block",
    },
  },
  desktopMenuLink: {
    paddingRight: (theme: Theme) => theme.spacing(3),
    paddingLeft: (theme: Theme) => theme.spacing(3),
  },
  desktopMenuIcon: {
    marginRight: (theme: Theme) => theme.spacing(1),
    marginLeft: (theme: Theme) => theme.spacing(1),
  },
};

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const CustomAppBar = ({
  drawerOpen,
  onOpenDrawer,
  onCloseDrawer,
}: CustomAppBarProps) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const logo = process.env.PUBLIC_URL + `/images/logo_${isMobile ? 'mobile' : 'desktop'}.svg`

  const mobileMenu = (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={drawerOpen ? onCloseDrawer : onOpenDrawer}
      sx={{ ...styles.mobileMenu }}
    >
      {drawerOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );

  const desktopMenu = (
    <Box sx={{...styles.desktopMenu}}>
      {["About", "Item", "Shop", "Info", "Press"].map((link) => (
        <Link
          href="#about"
          fontFamily="Baskerville"
          color="#505B5F"
          fontSize="16px"
          underline="none"
          key={link}
          sx={{ ...styles.desktopMenuLink }}
        >
          {link}
        </Link>
      ))}
      <IconButton sx={{...styles.desktopMenuIcon}}>
        <InstagramIcon />
      </IconButton>
      <IconButton >
        <FacebookIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ ...styles.box }}>
      <StyledAppBar
        // position="relative"
        color="secondary"
      >
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{...styles.logo}}
          />
          <Typography
            fontSize="12px"
            fontFamily="Baskerville"
            color="#505B5F"
            component="h1"
            sx={{ ...styles.name }}
          >
            We sell only sweaters
          </Typography>
          {desktopMenu}
          {mobileMenu}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default CustomAppBar;
