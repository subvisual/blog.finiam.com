import Link from 'next/link';
import Image from 'next/image';

import PostHeaderInfo from '../post-header-info/post-header-info';

import styles from './post-preview.module.scss';

type PostPreviewProps = {
  post: PostPreview;
  isFirst: boolean;
};

export default function PostPreview({ post, isFirst }: PostPreviewProps) {
  const postHeaderInfo = {
    authorImage: post.author.image.asset.url,
    authorName: post.author.name,
    publishedAt: post.publishedAt,
    postCategory: post.category,
    keywords: post.keywords,
  };

  return (
    <div className={`${isFirst ? styles['top-post'] : ''}`}>
      <Link href={`/blog/${post.slug.current}`}>
        <a>
          <div className={styles['post-preview']}>
            <div className={styles['image-container']}>
              <Image
                src={post.featuredImage.asset.url}
                alt={post.featuredImageAlt}
                blurDataURL={post.featuredImage.asset.metadata.lqip}
                objectFit='cover'
                layout='fill'
                placeholder='blur'
              />
            </div>
            <div className={styles['post-text']}>
              <div className={styles['text-wrapper']}>
                <h3 className={styles['post-title']}>{post.title}</h3>
                <p className={styles['post-description']}>{post.longDescription}</p>
              </div>
              <PostHeaderInfo postInfo={postHeaderInfo} className='post-preview' />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
