'use strict'

var express = require("express");
var projectcontroller = require("../controllers/project");

var router = express.Router();

//importar o subir imagenes
var multipart = require('connect-multiparty');
var multipartyMiddleware = multipart({ uploadDir: './uploads'});

router.get("/home", projectcontroller.home);
router.post("/test", projectcontroller.test);
router.post("/save_project", projectcontroller.saveProject);
router.get("/project/:id?", projectcontroller.getProject);
router.get("/projects", projectcontroller.getProjects);
router.put("/project/:id", projectcontroller.updateProject);
router.delete("/project/:id", projectcontroller.deleteProject);
router.post("/upload_image/:id", multipartyMiddleware, projectcontroller.uploadImage);
router.get("/get_image/:image", projectcontroller.getImageFile);

module.exports = router;