'use strict'
var Project = require('../models/project');
//para la validacion de imagenes
var fs = require('fs');
var path = require('path');

var controller = {
    home: function(req, res){
        return res.status(200).send({
           messaje: 'Soy la home' 
        });return res.status(200).send({
           messaje: 'Soy la home' 
        });
    },
    test: function(req, res){
        return res.status(200).send({
            messaje: 'Soy el metodo o accion test' 
         });
    },
    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored)=>{
            if(err) return res.status(500).send({
                messaje: "Erro al guardar los datos"
            });

            if(!projectStored) return res.status(404).send({
                messaje: 'No se ha podido guardar el proyecto'
            });

            return res.status(200).send({
                project: projectStored
            });
        });
        
    },
    getProject: function(req,res){
        var projectid = req.params.id;

        if(projectid == null) return res.status(404).send({messaje: "El proyecto no existe."});
        
        Project.findById(projectid, (err, project)=>{
            if(err) return res.status(500).send({messge: "Error al devolver los datos."});
            
            if(!project) return res.status(404).send({messaje: "El proyecto no existe."});

            return res.status(200).send({
                project
            });
        });
    },
    getProjects: function(req,res){

        // Project.find({year:2019}).exec((err,projects)=>{   sacar los elementos con filtro
        // Project.find({}).sort(year).exec((err,projects)=>{  ordenar los elmentos por año, agregar el menos si quieres ordenarlo de menor a mayor
 
        Project.find({}).exec((err,projects)=>{
            if(err) return res.status(500).send({messaje: 'Error al deovlver los datos.'});

            if(!projects) return res.status(404).send({messaje: 'No hay proyectos por mostrar'});

            return res.status(200).send({projects});
        });
    },
    updateProject: function(req,res){
        var projectid = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectid,update, {new:true},(err,projectUpdated)=>{
            if(err) return res.status(500).send({messaje:"Error al actualizar"});

            if(!projectUpdated) return res.status(404).send({messaje:"No existe el proyecto para actualizar"});

            return res.status(200).send({
                project: projectUpdated
            });
        });

    },

    deleteProject: function(req,res){
        var projectid = req.params.id;

        Project.findByIdAndRemove(projectid, (err, projectRemoved)=>{
            if(err) return res.status(500).send({messaje:"Error al eliminar"});

            if(!projectRemoved) return res.status(500).send({messaje:"No existe el proyecto a eliminar"});

            return res.status(200).send({
                project: projectRemoved
            });
        });       
    },
    uploadImage: function(req,res){
        var projectid = req.params.id;
        var filename ='Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var filesplit = filePath.split('\\');
            var filename = filesplit[1];
            var extSplit = filename.split('\.');
            var fileext = extSplit[1];

            if(fileext == "png" || fileext == "jpg" || fileext == "jpeg" || fileext == "gif"){
                Project.findByIdAndUpdate(projectid, {image: filename}, {new:true}, (err, projectUpdated)=>{
                    if(err) return res.status(500).send({messaje:"Error al subir la iamgen"});
    
                    if(!projectUpdated) return res.status(404).send({messaje:"No existe el proyecto para actualizar"});
                        
                    return res.status(200).send({
                        project: projectUpdated
                     });
                });
            }else{
              fs.unlink(filePath, (err)=>{
                return res.status(200).send({
                    messaje: 'la extension no es valida'
                });
              });  
            }
        }else{
            return res.status(200).send({
                messaje: filename
             });
        }
    },
    getImageFile: function(req,res){
        var file = req.params.image;
        var path_file = './uploads/'+file;

        fs.exists(path_file, (exist)=>{
            if(exist){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    messaje: "No existe la imagen..."
                });
            }
        });
    }

};

module.exports = controller;