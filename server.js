const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("client/build"));

app.get("/", function (req, res) {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});
