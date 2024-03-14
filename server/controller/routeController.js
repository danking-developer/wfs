const nodemailer = require("nodemailer");
const { validationResult, body } = require("express-validator");

// ----- Nodemailer to send contact request email ----------
const sendEmail = async (
  recipientEmail,
  emailSubject,
  htmlBody,
  req,
  res,
  next
) => {
  console.log("Request to send email for contact request");

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE_PROVIDER,
    secure: true,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER_ID,
      pass: process.env.EMAIL_APP_PW,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SEND_FROM,
    to: recipientEmail,
    subject: emailSubject,
    html: htmlBody,
  };

  try {
    console.log("Sending email...");
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Failed to send: ", error);
        res.status(500).json({ msg: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        next();
      }
    });
  } catch (error) {
    console.log("Server error sending mail: ", error);
    res.status(500).json({ msg: "Server error sending email." });
  }
};

// ------ validate data and email director contact request -------
const contactRequest = async (req, res) => {
  console.log("A contact request has been submitted");

  req.body.email = req.body.email.toLowerCase();
  req.body.fName = req.body.fName.toLowerCase();
  req.body.lName = req.body.lName.toLowerCase();

  // validation added to check email is valid format and custom validation added to see if username already exists in db
  await body("email").isEmail().withMessage("Invalid email format").run(req);

  await body("fName")
    .custom(async (value) => {
      const nameRegex = /^(?!.*-.*-)[a-zA-Z]{1,20}(?:-[a-zA-Z]{1,20})?$/;
      if (!nameRegex.test(value)) {
        console.log("Failed. Name text is in invalid format");
        throw new Error(
          "First name must contain 1 - 20 letters and contain no special characters except a hyphen."
        );
      }
    })
    .run(req);

  await body("lName")
    .custom(async (value) => {
      const nameRegex = /^(?!.*-.*-)[a-zA-Z]{1,20}(?:-[a-zA-Z]{1,20})?$/;

      if (!nameRegex.test(value)) {
        console.log("Failed. Name text is in invalid format");
        throw new Error(
          "First name must contain 1 - 20 letters and contain no special characters except a hyphen."
        );
      }
    })
    .run(req);

  const result = validationResult(req);

  // Return 400 response with errors if they exist
  if (!result.isEmpty()) {
    console.log("Failed", result.array());
    return res.status(400).json({ errors: result.array() });
  }

  try {
    // send contact request email to director of Worf football services
    const htmlBody = `
          <html>
          <head>
          <style>
            /* Inline CSS styles */
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
            }
            h1 {
              color: #333;
            }
            h3 {
              color: #333;
            }
            .passcode {
              font-size: 24px;
              font-weight: bold;
              color: #007bff;
            }
          </style>
        </head>
            <body>
              <h1>Great news!</h1>
              <p>A potential client has requested a call back for your services</p>
             <p>Please see the details below and call them back as soon as possible</p>
             <p>Client: ${req.body.fName} ${req.body.lName}</p>
             <p>Email: ${req.body.email}</p>
             <p>Telephone: ${req.body.phone}</p>
             <p>Details: ${req.body.yourGoals}</p>
             <h3>Thanks,</h3>
             <h3>Auto email for Worf Football Services</h3>
             <h6>Do not reply to this email. This mailbox is not monitored</h6>
            </body>
          </html>
        `;

    const contactRequestEmail = [
      process.env.ADMIN_EMAIL_CONFIRMATION,
      "Great news! Someone has submitted a contact request for your services",
      htmlBody,
    ];

    // Email confirmation email to Worf football services
    await sendEmail(...contactRequestEmail);

    return res.status(200).json({
      msg: "Thank you for your interest. I will contact you shortly to discuss a training plan.",
    });
  } catch (error) {
    console.log("error with contact request: ", error);
    return res.status(400).json({
      msg: "Server error submitting your request. Please try again",
    });
  }
};

module.exports = {
  contactRequest,
};
