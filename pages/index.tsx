import { getAllPosts } from "../lib/api";
import Layout from "../components/layout/layout";
import FeaturedPosts from "../components/featured-posts/featured-posts";

export default function BlogIndex({ data: allPost }: PostsPreview) {
  return (
    <Layout showCategories>
      <FeaturedPosts posts={allPost} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { allPost } = await getAllPosts();

  return {
    props: {
      data: allPost,
    },
  };
}
