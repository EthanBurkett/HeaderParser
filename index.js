const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,
    software: req.headers["user-agent"],
    language: req.headers["accept-language"],
  });
});

app.listen();
