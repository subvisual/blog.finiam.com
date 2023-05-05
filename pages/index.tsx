import { getAllPosts } from "../lib/api";
import Layout from "../components/layout/layout";
import FeaturedPosts from "../components/featured-posts/featured-posts";
import generateRssFeed from "../lib/rss-feed";
import MetaHead from "../components/meta-head/head";

export default function BlogIndex({ data: allPost }: PostsPreview) {
  return (
    <Layout showCategories>
      <MetaHead />
      <FeaturedPosts posts={allPost} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { allPost } = await getAllPosts();

  await generateRssFeed(allPost);

  return {
    props: {
      data: allPost,
    },
  };
}
