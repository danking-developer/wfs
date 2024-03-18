"use client";
import { Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { fetchPageContent } from "../sanity/lib/fetch";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [instaLink, setInstaLink] = useState(null);
  const [linkedInLink, setlinkedInLink] = useState(null);
  const date = new Date();
  const year = date.getFullYear();

  const linkStyles = {
    textDecoration: "none",
    color: "#ffffff",
  };

  // fetch social links from Sanity
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPageContent();
      setInstaLink(data.socialsSection[0].instagramURL);
      setlinkedInLink(data.socialsSection[0].linkedInURL);
    }
    fetchData();
  }, []);

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
        {linkedInLink && (
          <Link href={linkedInLink} style={linkStyles}>
            <LinkedInIcon fontSize="small" />
          </Link>
        )}
        {instaLink && (
          <Link href={instaLink} style={linkStyles}>
            <InstagramIcon fontSize="small" />
          </Link>
        )}
      </Grid>
    </Grid>
  );
}
