import { request, gql } from 'graphql-request';

import { getAllSlugs, getPost } from '../../lib/api';
import PostBody from '../../components/post-body/post-body';
import PostHeader from '../../components/post-header/post-header';
import Layout from '../../components/layout/layout';

export default function BlogPost({ data }: PostsMain) {
  const post = data[0];

  const postHeaderData = {
    title: post.title,
    authorName: post.author.name,
    authorImage: post.author.image.asset.url,
    category: post.category,
    publishedAt: post.publishedAt,
    keywords: post.keywords,
    imageUrl: post.featuredImage.asset.url,
    imageAlt: post.featuredImageAlt,
  };

  const postBodyData = {
    body: post.body,
  };

  return (
    <Layout showCategories={false}>
      <div>
        <PostHeader data={postHeaderData} />
        <PostBody data={postBodyData} />
      </div>
    </Layout>
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
