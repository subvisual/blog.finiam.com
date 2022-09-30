import { getPostsByCategory, getAllCategories } from "../../lib/api";
import Layout from "../../components/layout/layout";
import FeaturedPosts from "../../components/featured-posts/featured-posts";
import MetaHead from "../../components/meta-head/head";

export default function Category({
  allPost,
  category,
}: {
  allPost: PostPreview[];
  category: string;
}) {
  const categoryTitleCased = category.replace(/\b[a-z]/g, (val) =>
    val.toUpperCase(),
  );

  return (
    <Layout showCategories>
      <MetaHead title={`${categoryTitleCased} - Finiam's blog`} />
      <FeaturedPosts posts={allPost} />
    </Layout>
  );
}

export async function getStaticProps(context: CategoryContext) {
  const { allPost } = await getPostsByCategory(context.params.category);

  return {
    props: {
      allPost,
      category: context.params.category,
    },
  };
}

export async function getStaticPaths() {
  const { allPost }: PostCategories = await getAllCategories();

  const categories = Array.from(new Set(allPost.map((item) => item.category)));

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}
