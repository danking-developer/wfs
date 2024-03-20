const express = require("express");
const router = express.Router();

const { contactRequest } = require("../controller/routeController");

// i.e.  http://localhost:4000/api
router.get("/", (req, res) => {
  res.status(200).json({ msg: "API server is active" });
});

router.post("/contact-request", contactRequest);

module.exports = { router };
