import { request, gql } from 'graphql-request';
import Link from 'next/link';

import { getPostsByCategory, getAllCategories } from '../../lib/api';

export default function Category({ data: allPost }: PostsPreview) {
  return allPost.map(item => (
    <div key={item.slug.current}>
      <img src={item.featuredImage.asset.url} alt={item.featuredImageAlt}></img>
      <Link href={`/blog/${item.slug.current}`}>
        <h2>{item.title}</h2>
      </Link>
      <p>{item.longDescription}</p>
      <img src={item.author.image?.asset.url} alt={`${item.author.name} avatar`} />
      <p>
        {item.author.name} &#8226; {item.category} &#8226;
        {new Date(item.publishedAt).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
        })}
      </p>
    </div>
  ));
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
