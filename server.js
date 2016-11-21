var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoDb = require("./models/mongo");
var router = express.Router();



//var apiV1 = require('./apiversions/apiV1.js');
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

app.get("/", function(req, res) {
        var response = {};
        mongoDb.find({ }, function(err, data){
            if(err) { response = {"error" : true, "message" : "Error fetching data"}; console.log(err.stack); }
            else { response = { data } };
            res.json(response);
    })
});

app.post("/", function(req, res, next) {
    var response = {};
    console.log(req);
    console.log(req.body);
});

app.get("/:id", function(req,res){
    var response = {};
    mongoDb.findById(req.params.id,function(err,data){
        if(err) { response = {"error" : true, "message" : "Error fetching data"}; console.log(err.stack); }
        else { response = { data } };
        res.json(response);
    });
});

app.put("/:id", function(req,res){
    var response = {};
    console.log(req);
    console.log(req.body);
});

app.delete("/:id", function(req,res){
    var response = {};
    mongoDb.findById(req.params.id,function(err,data){
        if(err) { response = {"error" : true, "message" : "Error fetching data"}; console.log(err.stack); }
         else {
            mongoDb.remove({_id : req.params.id},function(err){
                if(err) { response = {"error" : true, "message" : "Error deleting data"}; console.log(err.stack); }
                else { response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"}; }
                res.json(response);
            });
         }
    });
});

app.listen(3000, function() { console.log("App is listening on port 3000"); });