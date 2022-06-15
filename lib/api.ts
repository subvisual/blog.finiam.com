import { gql } from 'graphql-request';

export const getAllPosts = gql`
  query {
    allPost(sort: { publishedAt: DESC }) {
      title
      slug {
        current
      }
      keywords
      longDescription
      author {
        name
        image {
          asset {
            url
          }
        }
      }
      featuredImage {
        asset {
          url
        }
      }
      featuredImageAlt
      category
      publishedAt
    }
  }
`;

export const getPostsByCategory = (category: string) => gql`
    query {
      allPost(where: { category: { eq: "${category}"} }) {        
        title
        slug {
          current
        }
        keywords
        longDescription
        author {
          name
          image {
            asset {
              url
            }
          }
        }
        featuredImage {
          asset {
            url
          }
        }
        featuredImageAlt
        category
        publishedAt
      }
    }
  `;
