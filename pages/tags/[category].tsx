import { request, gql } from 'graphql-request';
import Link from 'next/link';

import { getPostsByCategory, getAllCategories } from '../../lib/api';
import Layout from '../../components/layout/layout';
import FeaturedPosts from '../../components/featured-posts/featured-posts';

export default function Category({ data: allPost }: PostsPreview) {
  return (
    <Layout showCategories={true}>
      <FeaturedPosts posts={allPost} />
    </Layout>
  );
}

export async function getStaticProps(context: CategoryContext) {
  const { allPost } = await getPostsByCategory(context.params.category);

  return {
    props: {
      data: allPost,
    },
  };
}

export async function getStaticPaths() {
  const { allPost }: PostCategories = await getAllCategories();

  const categories = Array.from(new Set(allPost.map(item => item.category)));

  const paths = categories.map(category => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}
