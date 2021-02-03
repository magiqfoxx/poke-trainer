import apollo from "apollo-server";
const { gql } = apollo;

const typeDefs = gql`
  type Pokemon {
    id: ID
    name: String
    evolutionRequirements: [EvolutionRequirements]
    evolutions: [Evolution]
  }
  type Evolution {
    id: ID
    name: String
  }
  type EvolutionRequirements {
    amount: Int
  }

  type Query {
    starterPokemons: [Pokemon]
    pokemon(id: ID!): Pokemon
    currentPokemon: Pokemon
  }
  type Mutation {
    train(id: ID!): Pokemon #gain exp lose energy
    sleep(id: ID!): Pokemon #regains energy
    fight(id: ID!): Pokemon #gain exp if won
    evolve(id: ID!): Pokemon
  }
`;

export default typeDefs;
