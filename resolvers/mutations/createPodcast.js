const Podcast = require("../../models/Podcast");

module.exports = async (_, {input}) =>{
    const newPodcast = await Podcast.create(input);
    return newPodcast;
}