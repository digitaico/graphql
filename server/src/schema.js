const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
  tracksForHome:[Track!]!
}
  
  "a track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Tracks title"
    title: String!
    "tracks main author"
    author:Author!
    thumbnail:String
    length:Int
    modulesCount: Int
   }

   "Author of a complete track"
   type Author {
    id:ID!
    name:String!
    photo:String
   }

`;

module.exports = typeDefs;
