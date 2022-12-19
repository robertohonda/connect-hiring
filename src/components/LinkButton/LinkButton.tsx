import Link, { LinkProps } from "@mui/material/Link";

const styles = {
  root: {
    paddingBottom: "6px",
    textUnderlineOffset: 6,
  },
};

const LinkButton = (props: LinkProps) => (
  <Link
    underline="always"
    color="#000000"
    lineHeight={"39px"}
    sx={styles.root}
    fontFamily="Baskerville"
    fontSize={16}
    href="#about-more"
    {...props}
  />
);

export default LinkButton;
