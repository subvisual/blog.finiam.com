import Link from 'next/link';
import Image from 'next/image';

import { getFirstNKeywords } from '../../lib/keywords';

import styles from './post-preview.module.scss';

export default function PostPreview({ post, isFirst }: PostPreviewProps) {
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
              <div className={styles['avatar-container']}>
                <Image
                  src={post.author.image?.asset.url}
                  alt={`${post.author.name} avatar`}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <li>{post.author.name}</li>
              <li>&#183;</li>
              <li>
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                })}
              </li>
            </ul>
            <ul className={`${styles.list} ${styles.keywords}`}>
              {getFirstNKeywords(post.keywords, 2).map(keyword => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
