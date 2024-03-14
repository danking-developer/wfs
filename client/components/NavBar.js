"use client";
import { Grid, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navContainerStyle = {
  top: "0px",
  position: "fixed",
  zIndex: 1000,
  width: "100vw",
  height: "70px",
  //   vertical align links
  alignItems: "center",
  borderBottom:"solid #c4c4c4"
};

const linkLayout = {
  display: "flex",
  justifyContent: "space-evenly",
};

const lgLinkStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  textDecoration: "none",
  color: "#000000",
};

const smLinkStyles = {
  textDecoration: "none",
  color: "#000000",
};

const menuOptions = ["home", "services", "about", "contact"];

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Grid container className="nav-bar" sx={navContainerStyle}>
      {/* Company logo left of nav bar */}
      <Grid item xs={1} md={6} style={{ textAlign: "left" }}>
        <div
          style={{
            border: "solid #ffffff",
            height: "60px",
            width: "60px",
            borderRadius: "90%",
            alignContent: "center",
            textAlign: "center",
            backgroundColor: "#ffffff",
            paddingLeft: "5px",
          }}
        >
          <h4>
            <Link href="/" style={{ textDecoration: "none", color: "#000000" }}>
              <em>WORF</em>
            </Link>
          </h4>
        </div>
      </Grid>

      {/* Display menu options on navbar for medium + screens */}
      <Grid
        item
        xs={0}
        md={6}
        sx={{ ...linkLayout, visibility: { xs: "hidden", md: "visible" } }}
      >
        {menuOptions.map((option, index) => (
          <Link style={lgLinkStyles} key={index} href={`#${option}`}>
            <Typography variant="p" component="h5">
              {option.toUpperCase()}
            </Typography>
          </Link>
        ))}
      </Grid>

      {/* Display nav soccer icon on smaller screens */}
      <Grid
        container
        sx={{ visibility: { xs: "visible", md: "hidden" } }}
        style={{
          position: "fixed",
          justifyContent: "flex-end",
          paddingRight: "10px",
        }}
      >
        <a
          // href={`#`}
          onClick={() => {
            setShowNav(showNav ? false : true);
          }}
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
        >
          <motion.div
            whileTap={{
              rotate: [0, 360, 0],
              transition: { repeat: 0, duration: 1 },
            }}
          >
            <SportsSoccerIcon fontSize="large" />
          </motion.div>
        </a>
      </Grid>

      {/* Display nav menu  after clicking football icon on smaller screens. Close on hover off */}
      {showNav && (
        <Grid
          container
          onMouseLeave={() => {
            setShowNav(false);
          }}
          style={{
            position: "relative",
            backgroundColor: "#ffffff",
            textAlign: "right",
            padding: "10px",
          }}
        >
          {menuOptions.map((option, index) => (
            <Grid item xs={12} marginBottom={"12px"} key={index}>
              <Link
                style={smLinkStyles}
                href={`#${option}`}
                onClick={() => {
                  setShowNav(showNav ? false : true);
                }}
              >
                <Typography variant="p" component="h3">
                  {option.toUpperCase()}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}
