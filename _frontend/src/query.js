//import our graph query parser
import gql from "graphql-tag";

// our first query will requests all movies
// with only given fields
// note the usage of gql with 'jsvascript string literal'
export const SAMPLE_QUERY = gql`
    query sample{
        sample
    }
`
