const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    url:{
        type: String,
        trim: true,
        required: true
    },
})

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;