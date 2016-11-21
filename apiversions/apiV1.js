/*var express = require("express");
var app = express();
var mongoDb = require("../models/mongo");
var bodyParser = require('body-parser')

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.route("/")
    .get(function(req, res) {
        var response = {};
        mongoDb.find({ }, function(err, data){
            if(err) { response = {"error" : true, "message" : "Error fetching data"}; console.log(err.stack); }
            else { response = { data } };
            res.json(response);
    })
    
});

router.post("/", function(req, res) {
    var response = {};
    console.log(req);
    console.log(req.body);
});

router.put("/", function(req, res) {
    res.send("i don’t see a lot of PUT requests anymore");
});

router.delete("/", function(req, res) {
    res.send("oh my, a DELETE??");
});

module.exports = router; */