const router = require("express").Router();
const Contact = require("../models/models");
const controller = require("../controllers/controllers");

router.get("/", controller.list);

router.post("/create", controller.create);

router.delete("/delete", controller.delete);

module.exports = router;
