'use strict'

var express = require("express");
var projectcontroller = require("../controllers/project");

var router = express.Router();

router.get("/home", projectcontroller.home);
router.post("/test", projectcontroller.test);
router.post("/save_project", projectcontroller.saveProject);
router.get("/project/:id?", projectcontroller.getProject);
router.get("/projects", projectcontroller.getProjects);
router.put("/project/:id", projectcontroller.updateProject);
router.delete("/project/:id", projectcontroller.deleteProject);

module.exports = router;