const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const { clients, projects } = require("../sampleData.js");

const ClientType = new GraphQLObjectType({
  name: "client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});


module.exports = schema;
