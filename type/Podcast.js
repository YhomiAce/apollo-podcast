const { gql } = require("apollo-server");

module.exports = gql`
    type Podcast {
        id: ID!
        name: String!
        url: String!
    }
    input createPodcastInput{
        name: String!
        url: String!
    }
    input updatePodcastInput{
        name: String,
        url: String
    }
    type deletePayload{
        id: ID!
    }

    type Query {
        podcasts: [Podcast]
    }
    type Mutation {
        createPodcast(input: createPodcastInput!): Podcast!
        updatePodcast(id: ID, input: updatePodcastInput!): Podcast!
        deletePodcast(id: ID): deletePayload!
    }
    
`;