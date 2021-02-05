import apollo from "apollo-server";
const { gql } = apollo;

const typeDefs = gql`
  type Pokemon {
    id: ID
    name: String
    evolutionRequirements: [EvolutionRequirements]
    evolutions: [Evolution]
    image: String
  }
  type Evolution {
    id: ID
    name: String
  }
  type EvolutionRequirements {
    amount: Int
  }
  type Rival {
    name: String
    id: ID
    level: Int
    difficulty: Int
  }

  type Query {
    starterPokemons: [Pokemon]
    pokemon(id: ID!): Pokemon
    rival(difficulty: Int!): Rival
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
