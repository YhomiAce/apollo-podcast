const Podcast = require("../../models/Podcast");

module.exports = async (_,{id}) =>{
    const deletePodcast = await Podcast.deleteOne({_id:id});
    return {id};
}