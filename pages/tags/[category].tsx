import { request, gql } from 'graphql-request';
import Link from 'next/link';

import { CategoryProps } from '../../index';
import { getPostsByCategory } from '../../lib/api';

export default function Category({ data: allPost }: CategoryProps) {
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

type Context = {
  params: {
    category: string;
  };
};

export async function getStaticProps(context: Context) {
  const { allPost } = await request(
    process.env.CMS_URL as string,
    getPostsByCategory(context.params.category)
  );

  return {
    props: {
      data: allPost,
    },
  };
}

type BlogPostCategories = {
  allPost: {
    category: string;
  }[];
};

export async function getStaticPaths() {
  const getCategories = gql`
    query {
      allPost(sort: { publishedAt: DESC }) {
        category
      }
    }
  `;

  const { allPost }: BlogPostCategories = await request(
    process.env.CMS_URL as string,
    getCategories
  );

  const categories = Array.from(new Set(allPost.map(item => item.category)));

  const paths = categories.map(category => ({
    params: { category },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
