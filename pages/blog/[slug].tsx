import { getAllSlugs, getPost } from '../../lib/api';
import PostBody from '../../components/post-body/post-body';
import PostHeader from '../../components/post-header/post-header';
import Layout from '../../components/layout/layout';
import Share from '../../components/share/share';
import MetaHead from '../../components/meta-head/head';

export default function BlogPost({ data }: PostsMain) {
  const post = data[0];

  const postHeaderData = {
    title: post.title,
    description: post.description,
    authorName: post.author.name,
    authorImage: post.author.image.asset.url,
    category: post.category,
    publishedAt: post.publishedAt,
    keywords: post.keywords,
    imageUrl: post.featuredImage.asset.url,
    imageAlt: post.featuredImageAlt,
    imageMetadata: post.featuredImage.asset.metadata,
  };

  const postBodyData = {
    body: post.body,
  };

  return (
    <Layout showCategories={false}>
      <MetaHead
        title={postHeaderData.title}
        description={postHeaderData.description}
        image={postHeaderData.imageUrl}
      />

      <div>
        <PostHeader data={postHeaderData} />
        <PostBody data={postBodyData} />
        <Share />
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

  const paths = allPost.map((item) => ({
    params: { slug: item.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}
