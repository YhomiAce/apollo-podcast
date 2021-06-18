const Podcast = require("../../models/Podcast");

module.exports = async (_, {id, input}) =>{
    const podcast = await Podcast.findById(id)
    Object.keys(input).forEach(value =>{
        podcast[value] = input[value];
    })

    const updatePodcast = await podcast.save();
    return updatePodcast;
}