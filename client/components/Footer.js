import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const linkStyles = {
    textDecoration: "none",
    color: "#ffffff",
  };

  return (
    <Grid
      container
      style={{
        backgroundColor: "#000000",
        borderTop: "solid #ffffff",
        color: "#ffffff",
        position: "relative",
        height: "45px",
        alignContent: "center",
        bottom: 0,
        left: 0,
      }}
    >
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="p" component="p">
          WORF Football Services {year}
        </Typography>
        <Link href={"https://www.facebook.com"} style={linkStyles}>
          <FacebookIcon fontSize="small" />
        </Link>
        <Link href={"https://www.instagram.com"} style={linkStyles}>
          <InstagramIcon fontSize="small" />
        </Link>
      </Grid>
    </Grid>
  );
}
