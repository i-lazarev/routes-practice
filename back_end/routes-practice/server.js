const express = require("express");
const api = express();
const router = require("./routes/index");

let port = 3000;

api.listen(port, () => {
  console.log(`Server start at port: ${port}`);
});

api.use("/", router);
