import { Grid, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
        <Link href={process.env.NEXT_PUBLIC_LINKED_IN_LINK} style={linkStyles}>
          <LinkedInIcon fontSize="small" />
        </Link>
        <Link href={process.env.NEXT_PUBLIC_INSTA_LINK} style={linkStyles}>
          <InstagramIcon fontSize="small" />
        </Link>
      </Grid>
    </Grid>
  );
}
