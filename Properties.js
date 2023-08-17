const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  // check you response headerSent true or false
  // console.log(res.headersSent);
  // ______E______N______D______!___

  // pass your view engine variable local
  res.render("pages/about", {
    name: "bangaldesh",
  });
});
// ______E______N______D______!___

app.listen(port, () => {
  console.log("Server running on port " + port);
});
