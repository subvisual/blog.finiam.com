import { gql, request } from "graphql-request";

const POST_SUMMARY_QUERY = `
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
      metadata {
        lqip
      }
    }
  }
  featuredImageAlt
  category
  publishedAt
`;

export const getAllPosts = () => {
  return request(
    process.env.CMS_URL as string,
    gql`
      query {
        allPost(sort: { publishedAt: DESC }) {
          ${POST_SUMMARY_QUERY}
        }
      }
    `
  );
};

export const getPostsByCategory = (category: string) => {
  return request(
    process.env.CMS_URL as string,
    gql`
      query {
        allPost(
          where: { category: { eq: "${category}"} }
          sort: { publishedAt: DESC }
        ) {        
          ${POST_SUMMARY_QUERY}
        }
      }
    `
  );
};

export const getAllCategories = () => {
  return request(
    process.env.CMS_URL as string,
    gql`
      query {
        allPost(sort: { publishedAt: DESC }) {
          category
        }
      }
    `
  );
};

export const getAllSlugs = () => {
  return request(
    process.env.CMS_URL as string,
    gql`
      query {
        allPost(sort: { publishedAt: DESC }) {
          slug {
            current
          }
        }
      }
    `
  );
};

export const getPost = (slug: string) => {
  return request(
    process.env.CMS_URL as string,
    gql`
      query {
        allPost(where: { slug: { current: { eq: "${slug}" } } }) {        
          title
          description
          keywords
          author {
            name
            role
            image {
              asset {
                url
              }
            }
          }
          featuredImage {
            asset {
              url
              metadata {
                lqip
              }
            }
          }
          featuredImageAlt
          category
          publishedAt
          body
        }
      }
    `
  );
};
