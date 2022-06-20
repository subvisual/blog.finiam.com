import Link from 'next/link';

import { getFirstNKeywords } from '../../lib/keywords';

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <div className='post-preview'>
      <img src={post.featuredImage.asset.url} alt={post.featuredImageAlt}></img>
      <Link href={`/blog/${post.slug.current}`}>
        <a>{post.title}</a>
      </Link>
      <p>{post.longDescription}</p>
      <div className='post-info'>
        <div>
          <img src={post.author.image?.asset.url} alt={`${post.author.name} avatar`} />
          <ul>
            <li>{post.author.name}</li>
            <li>{post.category}</li>
            <li>
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
              })}
            </li>
          </ul>
        </div>
        <ul className='keywords'>
          {getFirstNKeywords(post.keywords, 2).map(keyword => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
