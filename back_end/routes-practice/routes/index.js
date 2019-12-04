const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexControllers");

router.get("/", controller.home);

router.get("/json", controller.json);

router.get("/text", controller.text);

router.get("/html", controller.html);

module.exports = router;
