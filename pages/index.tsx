import { request, gql } from 'graphql-request';
import Link from 'next/link';

import { BlogIndexProps } from '../index';
import { getAllPosts } from '../lib/api';

export default function BlogIndex({ data: allPost }: BlogIndexProps) {
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

export async function getStaticProps() {
  const { allPost } = await request(process.env.CMS_URL as string, getAllPosts);

  return {
    props: {
      data: allPost,
    },
  };
}
