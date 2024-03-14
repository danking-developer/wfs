"use client";
import { Grid, Typography } from "@mui/material";
import ContactForm from "../../components/ContactForm";
import Loader from "../../components/Loader";
import { useState } from "react";
import Head from "next/head";

const sectionsLayout = {
  padding: "65px 15px 0px 15px",
  width: "100vw",
  overflow: "visible",
};

const homeSectionStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  height: "100vh",
  marginBottom: "10%",
};

const aboutSectionStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  height: "100%",
  overflow: "display",
  // borderBottom:"solid white"
};

const servicesSectionStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  minHeight: "100vh",
};

const contactSectionStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  height: "100vh",
};

const servicesArray = [
  `Tactical and Technical Analysis: Delve deep into your team's
tactics and playing style with individualised analysis services.`,
  `Opposition Analysis: Gain a competitive edge by dissecting the
strengths and weaknesses of your adversaries.`,
  `     Mentality Training: Sharpen your mental fortitude and resilience
with specialised training programs.`,
  `Mentorship Programme: Benefit from one-on-one mentoring
sessions designed to nurture your growth and potential.`,
  `Career Guidance: Navigate the intricacies of the football
industry with my insightful career guidance services.`,
  ` Highlights Packages: Showcase your skills with professionally
crafted highlight reels tailored to impress.`,
  `     Social Media Management: Enhance your online presence and
engagement with strategic social media management solutions.`,
];

export default function Home() {
  const [helpText, setHelperText] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  const submitContactRequest = async (data) => {
    if (!loading) {
      setIsLoading(true);
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVER_API, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });

        const json = await response.json();

        if (response.status === 200) {
          console.log("Success! ", json.msg);
          setIsLoading(false);
          setHelperText(json.msg);
          // This will update the resetData prop in ContactForm below, which will then clear data after 3 secs with the useEffect Hook
          setResetForm(true);
        } else {
          // set error message for single error
          if (json.msg) {
            console.log("Failed! ", json.msg);
            setIsLoading(false);
            setHelperText(json.msg);
          }
          // set error message for multiple errors
          if (json.errors) {
            const errors = [];

            json.errors.map((error) => {
              errors.push(error.msg);
            });
            console.log("Errors in submitting form: ", errors.join(". "));
            setIsLoading(false);
            setHelperText(errors.join(". "));
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log("Server error in submitting form");
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
              </Typography>
              <Typography variant="p" component="h1" className="home-page-h1">
                Football Services
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p" component="p" className="home-page-p">
                {" "}
                Welcome to WORF Football Services, where individual football
                development takes centre stage. With a decade of dedicated
                experience in the football and sports industry, I bring a wealth
                of footballing expertise to the table.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div id="services">
        <Grid container sx={{ ...sectionsLayout, ...servicesSectionStyle }}>
          <Grid item xs={12}>
            <Typography variant="p" component="h2" marginBottom="10px">
              Services
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {servicesArray.map((service, index) => (
              <Typography
                key={index}
                variant="p"
                component="p"
                className="services-p"
                sx={{
                  fontSize: { md: "170%", xl: "200%" },
                  marginBottom: "20px",
                }}
              >
                &#x2022; {service}
              </Typography>
            ))}
            <Typography
              variant="p"
              component="p"
              className="services-p"
              sx={{
                fontSize: { md: "170%", xl: "200%" },
                marginBottom: "20px",
              }}
            >
              Partnering with Tactalyse, I collaborate with professional and
              young footballers worldwide, including those in the Championship
              (England) and Ligue 2 (France), just to name a couple. My
              flexible, remote-based approach ensures that the services
              seamlessly integrate with your schedule and requirements. <br />
              <br />
              Join at WORF Football Services today and unlock your full
              potential on the football field. Let&lsquo;s embark on this journey
              together towards excellence.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div id="about">
        <Grid container sx={{ ...sectionsLayout, ...aboutSectionStyle }}>
          <Grid item xs={12}>
            <Typography variant="p" component="h2" marginBottom="10px">
              About me
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: { md: "170%", xl: "200%" },
                marginBottom: "20px",
              }}
            >
              My journey spans across diverse landscapes, from coaching stints
              in England, Tanzania, and New Zealand to strategic roles in
              football management (Estudiantes & Wellington Marist AFC),
              tactical analysis (Tactalyse), and technical analysis (Football
              Radar).
              <br />
              <br /> I am a FA qualified coach, with a Masters in Sports
              Psychology from the University of West England, a Football
              Business degree from the Open University, and the PFSA Level 1
              Talent Identification in Football qualification.
              <br />
              <br /> I’m fully equipped to elevate your game to new heights.
              WORF Football Services specialises in personalised football
              development solutions tailored to your unique needs. Whether
              you&lsquo;re a professional athlete aiming for the top leagues or a
              rising talent honing your skills, I’m here to propel you forward.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              alt="image of Joe Worf- Director"
              src={"/worf-portrait.jpg"}
              height="80%"
              width="95%"
              style={{ margin: "0% 2%" }}
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
