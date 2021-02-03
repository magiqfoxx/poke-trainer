import apollo from "apollo-server";
const { ApolloServer } = apollo;

import pokemons from "./data/pokemons.js";
import typeDefs from "./schema/schema.js";

const currentPokemon = {
  name: "Bulbasaur",
  exp: 5,
  money: 1,
  //level: exp/10 ?
};

const resolvers = {
  Query: {
    starterPokemons: () => pokemons.filter((pokemon) => pokemon.starter),
    pokemon: (parent, args, context, info) =>
      pokemon.find((pokemon) => pokemon.id === args.id),
    currentPokemon: () => currentPokemon,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
