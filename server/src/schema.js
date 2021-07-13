const { gql } = require('apollo-server');

const typeDefs = gql`
  
  "a track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID
    title: String!
    author:Author
    thumbnail:String
    length:Int
   }

  "Entities are "
   type Entities {

   }
`;

module.exports = typeDefs;
