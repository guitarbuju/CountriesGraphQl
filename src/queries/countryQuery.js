import { gql } from "@apollo/client"



export const grQlCountriesQuery = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }`