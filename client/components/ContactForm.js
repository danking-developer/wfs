import { Grid, Typography, TextField, Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

// ----- Reusable contact form with data validation -------
export default function ContactForm(props) {
  const [errorFields, setErrorFields] = useState({});
  const [contactDetails, setContactDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    yourGoals: "",
  });

  function resetForm() {
    setContactDetails({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      yourGoals: "",
    });
  }

  function handleSubmit() {
    const newErrors = {};
    // Reset errorFields before checking for new errors
    setErrorFields({});

    // Check if any of the regData fields are empty, then add the key to errorFields if it is.
    Object.entries(contactDetails).forEach(([key, value]) => {
      if (value === "") {
        // Using regex below to split values at their capital letters into an array, then we join them back into a string using a space " " in between, then making all words lowercase
        newErrors[key] = `${key
          .split(/(?=[A-Z])/)
          .join(" ")
          .toLowerCase()} must be completed`;
      }
    });

    setErrorFields(newErrors);

    // Will check if there are any key values in the newErrors object i.e username, then allow you to submit form if length is 0
    if (Object.keys(newErrors).length > 0) {
    } else {
      // If there are no errors, you will be able to submit the props.handleClick function i.e. the api to backend
      props.handleClick(contactDetails);
    }
  }

  //  Form will reset if page.js file updates props.resetData to true
  useEffect(() => {
    if (props.resetData) {
      setTimeout(() => {
        resetForm();
      }, 2000);
    }
  }, [props]);

  return (
    <Grid container>
      <Grid
        container
        sx={{
          backgroundColor: "#ffffff",
          textAlign: "center",
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
      >
        <Grid container lineHeight={5} sx={{ margin: "20px" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First name"
              error={errorFields.fName}
              helperText={errorFields.fName}
              value={contactDetails.fName}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[a-zA-Z-]*$/.test(input)) {
                  setContactDetails((prevState) => ({
                    ...prevState,
                    fName: input,
                  }));
                }
              }}
            />
            <TextField
              fullWidth
              label="Last name"
              error={errorFields.lName}
              helperText={errorFields.lName}
              value={contactDetails.lName}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[a-zA-Z-]*$/.test(input)) {
                  setContactDetails((prevState) => ({
                    ...prevState,
                    lName: input,
                  }));
                }
              }}
            />
            <TextField
              fullWidth
              type="email"
              label="Email"
              error={errorFields.email}
              helperText={errorFields.email}
              value={contactDetails.email}
              onChange={(e) => {
                const input = e.target.value;
                setContactDetails((prevState) => ({
                  ...prevState,
                  email: input,
                }));
              }}
            />
            <TextField
              fullWidth
              type="number"
              label="Telephone inc. country code"
              error={errorFields.phone}
              helperText={errorFields.phone}
              value={contactDetails.phone}
              onChange={(e) => {
                const input = e.target.value;
                if (/^[0-9]*$/.test(input)) {
                  setContactDetails((prevState) => ({
                    ...prevState,
                    phone: input,
                  }));
                }
              }}
            />
            <TextField
              fullWidth
              multiline
              minRows={7}
              label="Your goals.."
              error={errorFields.yourGoals}
              helperText={errorFields.yourGoals}
              value={contactDetails.yourGoals}
              onChange={(e) => {
                const input = e.target.value;
                setContactDetails((prevState) => ({
                  ...prevState,
                  yourGoals: input,
                }));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              // disabled={!isVerified}
              color="success"
              variant="contained"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Grid container lineHeight={1} overflow={"visible"}>
              <Typography variant="p">{props.infoText}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
