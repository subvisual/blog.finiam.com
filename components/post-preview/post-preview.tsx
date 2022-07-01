import Link from 'next/link';
import Image from 'next/image';

import { getFirstNKeywords } from '../../lib/keywords';
import { categoriesArray } from '../../lib/categories';

import styles from './post-preview.module.scss';

type PostPreviewProps = {
  post: PostPreview;
  isFirst: boolean;
};

export default function PostPreview({ post, isFirst }: PostPreviewProps) {
  const datePublished = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
  });
  const [monthPublished, yearPublished] = datePublished.split(' ');

  const { color } = categoriesArray.find(
    category => category.name.toLowerCase() === post.category
  ) || { color: 'lightgrey' };

  return (
    <div className={`${isFirst ? styles['top-post'] : ''}`}>
      <div className={styles['post-preview']}>
        <div className={styles['image-container']}>
          <Link href={`/blog/${post.slug.current}`}>
            <a>
              <Image
                src={post.featuredImage.asset.url}
                alt={post.featuredImageAlt}
                layout='fill'
                objectFit='cover'
              />
            </a>
          </Link>
        </div>
        <div className={styles['post-text']}>
          <div>
            <Link href={`/blog/${post.slug.current}`}>
              <a>
                <h3 className={styles['post-title']}>{post.title}</h3>
                <p className={styles['post-description']}>{post.longDescription}</p>
              </a>
            </Link>
          </div>
          <div className={styles['post-info']}>
            <ul className={styles.list}>
              <li className={styles['avatar-container']}>
                <Image
                  src={post.author.image?.asset.url}
                  alt={`${post.author.name} avatar`}
                  layout='fill'
                  objectFit='cover'
                />
              </li>
              <li>{post.author.name}</li>
              <li className={styles['date-published']}>
                <span>&#183;</span>
                <span className={styles['month-published']}>{monthPublished}</span>
                <span>{yearPublished}</span>
              </li>
            </ul>
            <ul className={styles.keywords}>
              {getFirstNKeywords(post.keywords, 2).map(keyword => (
                <li className={`${styles[color]}`} key={keyword}>
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
