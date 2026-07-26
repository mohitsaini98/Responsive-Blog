const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

router.get("/test", (req, res) => {
  res.json({ message: "Test route working fine!" });
});

module.exports = router;
