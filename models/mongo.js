var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;

var zipSchema = new Schema({
    _id: String,
    city: String,
    loc: {
        [0]: Number,
        [1]: Number
    },
    pop: Number,
    state: String
});

var zips = mongoose.model('zip', zipSchema);

module.exports = zips;