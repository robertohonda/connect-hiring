import React from "react";
import AppBar, {AppBarProps} from "@mui/material/AppBar";
import Box from "../Box/Box"
import Toolbar from "../Toolbar/Toolbar"
import Typography from "../Typography/Typography"
import IconButton from "../IconButton/IconButton"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/material/styles";

interface CustomAppBarProps {
  drawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
}

const styles = {
  box: {
    flexGrow: 1
  },
  name: {
    flexGrow: 1
  }
};

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const CustomAppBar = ({
  drawerOpen,
  onOpenDrawer,
  onCloseDrawer,
}: CustomAppBarProps) => {
  return (
    <Box sx={{ ...styles.box }}>
      <StyledAppBar
        // position="relative"
        color="secondary"
      >
        <Toolbar>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            height="26"
            alt="logo"
          />
          <Typography
            fontSize="12px"
            fontFamily="Baskerville"
            color="#505B5F"
            variant="h6"
            component="div"
            sx={{...styles.name}}
          >
            We sell only sweaters
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={drawerOpen ? onCloseDrawer : onOpenDrawer}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default CustomAppBar;
