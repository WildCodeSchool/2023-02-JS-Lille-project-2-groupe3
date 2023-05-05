const express = require("express");

const router = express.Router();

const articleControllers = require("./controllers/articleControllers");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);

const flyControllers = require("./controllers/flyControllers");

router.get("/fly", flyControllers.browse);
router.get("/fly/:id", flyControllers.read);

module.exports = router;
