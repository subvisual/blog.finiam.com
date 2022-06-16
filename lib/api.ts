import { gql, request } from 'graphql-request';

export const getAllPosts = () => {
  return request(
    process.env.CMS_URL as string,
    gql`
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
    `
  );
};

export const getPostsByCategory = (category: string) => {
  return request(
    process.env.CMS_URL as string,
    gql`
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
