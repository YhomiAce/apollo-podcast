const mutations = require("./mutations")
const queries = require("./query")

module.exports = {
    Mutation: {
        ...mutations
    },
    Query: {
        ...queries
    }
}