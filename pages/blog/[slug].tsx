import { request, gql } from 'graphql-request';

import { getAllSlugs, getPost } from '../../lib/api';

export default function BlogPost({ data }: PostsMain) {
  const post = data[0];

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

export async function getStaticProps(context: SlugContext) {
  const { allPost } = await getPost(context.params.slug);

  return {
    props: {
      data: allPost,
    },
  };
}

export async function getStaticPaths() {
  const { allPost }: PostSlugs = await getAllSlugs();

  const paths = allPost.map(item => ({
    params: { slug: item.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}
