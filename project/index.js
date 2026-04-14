const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "about.html")));
app.get("/contact-me", (req, res) => res.sendFile(path.join(__dirname, "contact-me.html")));
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, "404.html")));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server Error");
})

app.listen(8080, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server running at localhost:8080");
})