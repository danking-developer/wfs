require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const { router } = require("./routes/routes");
const frontendURL = process.env.FRONTEND_URL_LOCAL;

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
}

// required to access body information from html pages in json form. This replaces the depreciated body-parser
app.use(express.json());

app.use(
  cors({
    origin: frontendURL,
    credentials: true, // ALLOWS COOKIES TO BE SENT WITH REQUESTS. NEEDED FOR EXPRESS-SESSIONS
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // ensures all methods work on cors
  })
);

// sets main index page for server i.e. http://localhost:4000
app.get("/", (req, res) => {
  res.send("server is live");
});

// sets start of main server url before page routes i.e. http://localhost:4000/api
app.use("/api", router);

app.listen(port, () => {
  console.log(`Express is live on port ${port}`);
});
