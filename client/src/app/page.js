"use client";
import { Grid, Typography } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import PlayerCarousel from "../../components/PlayerCarousel";
import Loader from "../../components/Loader";
import Head from "next/head";
import { useState, useEffect } from "react";
// fetch request for data in Sanity
import { fetchPageContent } from "../../sanity/lib/fetch";
// Needed to display images from sanity and convert to url
import { urlForImage } from "../../sanity/lib/image";

const sectionsLayout = {
  padding: "65px 35px 30px 35px",
  width: "100vw",
  minHeight: "100vh",
  overflow: "scroll",
};

const homeSectionStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
};

const aboutSectionStyle = {
  // backgroundColor: "#000000",
  // color: "#ffffff",
  backgroundColor: "#ffffff",
  color: "#000000",
};

const servicesSectionStyle = {
  // backgroundColor: "#ffffff",
  // color: "#000000",
  backgroundColor: "#000000",
  color: "#ffffff",
};

const playersSectionStyle = {
  backgroundColor: "#e8f0fc",
  backgroundColor: "#000000",
  color: "#ffffff",
};

const contactSectionStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
};

export default function Home() {
  const [helpText, setHelperText] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [resetForm, setResetForm] = useState(false);
  const [homeContent, setHomeContent] = useState(null);
  const [servicesContent, setServicesContent] = useState(null);
  const [playerContent, setPlayerContent] = useState(null);
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    // ----- Connect API backend on page load ------
    const connectServer = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_SERVER_API_CONNECT, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.log("Error connecting to api server");
      }
    };

    // ----- Fetch page content from CMS on page load and wake server ------
    async function fetchData() {
      const data = await fetchPageContent();
      setAboutContent(data.aboutSection[0]);
      setServicesContent(data.servicesSection[0]);
      setHomeContent(data.homeSection[0]);
      setPlayerContent(data.playersSection);
    }
    connectServer();
    fetchData();
  }, []);

  // ----- Contact request emailed on form submission -------
  const submitContactRequest = async (data) => {
    if (!loading) {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_SERVER_API_CONTACT_REQUEST,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          }
        );

        const json = await response.json();

        if (response.status === 200) {
          setIsLoading(false);
          setHelperText(json.msg);
          // This will update the resetData prop in ContactForm below, which will then clear data after 3 secs with the useEffect Hook
          setResetForm(true);
        } else {
          // set error message for single error
          if (json.msg) {
            setIsLoading(false);
            setHelperText(json.msg);
          }
          // set error message for multiple errors
          if (json.errors) {
            const errors = [];

            json.errors.map((error) => {
              errors.push(error.msg);
            });
            setIsLoading(false);
            setHelperText(errors.join(". "));
          }
        }
      } catch (error) {
        setIsLoading(false);
        setHelperText("Server error in submitting form");
      }
    }
  };

  return (
    <Grid container>
      {loading && <Loader />}
      <Head>
        <title>Home | Worf Football Services</title>
      </Head>
      <div id="home">
        <Grid
          container
          sx={{ ...sectionsLayout, ...homeSectionStyle, textAlign: "left" }}
          className="football-bg"
        >
          <Grid container className="content">
            <Grid item xs={12}>
              <Typography variant="p" component="h1" className="home-page-h1">
                WORF
                <br /> Football Services
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {homeContent &&
                homeContent.homeBody &&
                homeContent.homeBody.map((block, index) => (
                  <Typography
                    key={index}
                    variant="p"
                    component="p"
                    className="home-page-p"
                  >
                    {/* Extract text content from each block */}
                    {block.children.map((child) => child.text).join(" ")}
                  </Typography>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div id="services">
        <Grid container sx={{ ...sectionsLayout, ...servicesSectionStyle }}>
          {servicesContent && (
            <>
              <Grid item xs={12}>
                <Typography variant="p" component="h2" marginBottom="10px ">
                  {servicesContent.servicesTitle}
                </Typography>
              </Grid>

              {/* Map out the paragraphs using Material UI Typography */}
              <Grid item xs={12}>
                {servicesContent.servicesBody &&
                  servicesContent.servicesBody.map((block, index) => (
                    <Typography
                      key={index}
                      variant="p"
                      component="p"
                      className="services-p"
                      sx={{
                        fontSize: { md: "170%", xl: "230%" },
                        marginBottom: "20px",
                      }}
                    >
                      {/* Extract text content from each block */}
                      {block.children.map((child) => child.text).join(" ")}
                    </Typography>
                  ))}
              </Grid>
            </>
          )}
        </Grid>
      </div>

      <div id="about">
        <Grid container sx={{ ...sectionsLayout, ...aboutSectionStyle }}>
          {aboutContent && (
            <>
              <Grid item xs={12}>
                <Typography variant="p" component="h2" marginBottom="5%">
                  {aboutContent.aboutTitle}
                </Typography>
              </Grid>

              {/* Map out the paragraphs using Material UI Typography */}
              <Grid item xs={12} md={6}>
                {aboutContent.aboutBody &&
                  aboutContent.aboutBody.map((block, index) => (
                    <Typography
                      key={index}
                      variant="p"
                      component="p"
                      sx={{
                        fontSize: { md: "150%", xl: "210%" },
                        marginBottom: "20px",
                      }}
                    >
                      {/* Extract text content from each block */}
                      {block.children.map((child) => child.text).join(" ")}
                    </Typography>
                  ))}
              </Grid>
            </>
          )}
          {/* Render image if found */}
          {aboutContent && aboutContent.aboutImage && (
            <Grid item xs={12} md={6}>
              <img
                alt="image of Joe Worf- Director"
                src={urlForImage(aboutContent.aboutImage)}
                height="90%"
                width="95%"
                style={{ margin: "0% 3%" }}
              />
              <Typography
                variant="p"
                component="p"
                fontSize={"14px"}
                textAlign={"center"}
              >
                Joe Worf- Director
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
      <div id="players">
        <Grid
          container
          rowGap={0}
          sx={{ ...sectionsLayout, ...playersSectionStyle }}
        >
          {playerContent && <PlayerCarousel players={playerContent} />}
        </Grid>
      </div>
      <div id="contact">
        <Grid
          container
          rowGap={1}
          sx={{
            ...sectionsLayout,
            ...contactSectionStyle,
            textAlign: "center",
            height: "100%",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="p" component="h2">
              Get in touch
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" component="p">
              Please provide details of your training needs and I&apos;ll
              contact you to discuss a personalised plan
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ContactForm
              handleClick={submitContactRequest}
              infoText={helpText}
              resetData={resetForm}
            />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
