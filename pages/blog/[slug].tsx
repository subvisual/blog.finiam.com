import { request, gql } from 'graphql-request';

import { BlogPostProps } from '../../index';

export default function BlogPost({ data }: BlogPostProps) {
  const post = data[0];

  const myPortableTextComponents = {
    types: {},
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        {post.author.name} &#8226; {post.category} &#8226;
        {new Date(post.publishedAt).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
        })}
      </p>
      <p>{post.keywords}</p>
      <img src={post.featuredImage.asset.url} alt={post.featuredImageAlt}></img>
      <p>{post.body}</p>
      <img src={post.author.image?.asset.url} alt={`${post.author.name} avatar`} />
    </div>
  );
}

type Context = {
  params: {
    slug: string;
  };
};

export async function getStaticProps(context: Context) {
  const getPost = gql`
  query {
    allPost(where: { slug: { current: { eq: "${context.params.slug}" } } }) {        
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
  `;

  const { allPost } = await request(process.env.CMS_URL as string, getPost);

  return {
    props: {
      data: allPost,
    },
  };
}

type BlogPostSlugs = {
  allPost: {
    slug: {
      current: string;
    };
  }[];
};

export async function getStaticPaths() {
  const getAllSlugs = gql`
    query {
      allPost(sort: { publishedAt: DESC }) {
        slug {
          current
        }
      }
    }
  `;

  const { allPost }: BlogPostSlugs = await request(process.env.CMS_URL as string, getAllSlugs);

  const paths = allPost.map(item => ({
    params: { slug: item.slug.current },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
