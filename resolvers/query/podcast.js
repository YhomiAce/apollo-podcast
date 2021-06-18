const Podcast = require("../../models/Podcast");
module.exports = async (_) =>{
    return await Podcast.find();
}