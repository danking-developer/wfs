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

const sectionStyleOne = {
  backgroundColor: "#000000",
  color: "#ffffff",
  height: "100vh",
  overflow: "scroll",
  // borderBottom:"solid white"
  
};

const sectionStyleTwo = {
  backgroundColor: "#000000",
  color: "#ffffff",
  height: "100%",
  marginBottom: "10%",
};

const sectionStyleThree = {
  backgroundColor: "#ffffff",
  color: "#000000",
  height: "100vh",
};

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
          sx={{ ...sectionsLayout, ...sectionStyleOne, textAlign: "left" }}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque rhoncus velit ut eros tempor euismod. Vivamus
                mollis eros non consequat pellentesque. Maecenas vitae tellus
                imperdiet, dignissim arcu ac, consequat lacus. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div id="about">
        <Grid container sx={{ ...sectionsLayout, ...sectionStyleTwo }}>
          <Grid item xs={12}>
            <Typography variant="p" component="h2" marginBottom="10px">
              About me
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="p"
              component="p"
              sx={{ fontSize: { md: "170%", xl: "200%" }, marginBottom:"20px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus velit ut eros tempor euismod. Vivamus mollis
              eros non consequat pellentesque. Maecenas vitae tellus imperdiet,
              dignissim arcu ac, consequat lacus.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus velit ut eros tempor euismod. Vivamus mollis
              eros non consequat pellentesque. Maecenas vitae tellus imperdiet,
              dignissim arcu ac, consequat lacus.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus velit ut eros tempor euismod. Vivamus mollis
              eros non consequat pellentesque. Maecenas vitae tellus imperdiet,
              dignissim arcu ac, consequat lacus.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rhoncus velit ut eros tempor euismod. Vivamus mollis
              eros non consequat pellentesque. Maecenas vitae tellus imperdiet,
              dignissim arcu ac, consequat lacus.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
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
            ...sectionStyleThree,
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
              Please provide details of your training needs and I'll contact you
              to discuss a personalised plan
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
