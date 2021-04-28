const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
 

    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    contactNo: {type: Number, required: true},
    gender: {type: String, required: true},
    country: {type: String, required: true},
},{
    timestamps:true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
