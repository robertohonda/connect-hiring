import React from "react";
import { Grid, Theme, Typography } from "@mui/material";

const styles = {
  root: {
    height: 39,
    backgroundColor: (theme: Theme) => theme.palette.primary.main,
  },
  text: {
    fontSize: {
      xs: 12,
      md: 14
    }
  }
};

interface SectionDividerProps {
  text?: string;
}

const SectionDivider = ({ text }: SectionDividerProps) => {
  return (
    <Grid
      sx={styles.root}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography sx={styles.text} color="secondary">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionDivider;
