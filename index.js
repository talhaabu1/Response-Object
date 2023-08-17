const express = require("express");

const app = express();
const port = 3000;

app.get("/name", (req, res) => {
  res.send("asdf");
});

app.get("/about", (req, res) => {
  // response without data close
  // res.end();
  // ______E______N______D______!___
  // send josn data{
  // res.json("sdadf");
  // }______E______N______D______!___
  // send status type code
  // res.sendStatus(200);
  // res.status(200);
  // }______E______N______D______!___
  // accept check type and send data ??
  // res.format({
  //   "text/plain": function () {
  //     res.send("h");
  //   },
  //   "text/html": function () {
  //     res.send("<p>hey</p>");
  //   },
  //   json: function () {
  //     res.send({ message: "hey" });
  //   },
  //   default: function () {
  //     // log the request and respond with 406
  //     res.status(406).send("Not Acceptable");
  //   },
  // });
  //______E______N______D______!___
  // sned location our client
  // res.location("/about");
  //______E______N______D______!___
  // redirect my other route
  // res.redirect("/name");
  //______E______N______D______!___
  // res set and get itme
  // res.set("name", "talha");
  // console.log(res.get("name"));
  //______E______N______D______!___
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
