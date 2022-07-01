import Image from 'next/image';

import PostHeaderInfo from '../post-header-info/post-header-info';

import styles from './post-header.module.scss';

type PostHeaderProps = {
  data: {
    title: string;
    authorName: string;
    authorImage: string;
    category: string;
    publishedAt: string;
    keywords: string;
    imageUrl: string;
    imageAlt: string;
  };
};

export default function PostHeader({
  data: { title, authorImage, authorName, category, publishedAt, keywords, imageUrl, imageAlt },
}: PostHeaderProps) {
  const postHeaderInfo = {
    authorImage,
    authorName,
    publishedAt,
    postCategory: category,
    keywords,
  };

  return (
    <div className={styles['post-header']}>
      <h1 className={styles['post-title']}>{title}</h1>
      <PostHeaderInfo postInfo={postHeaderInfo} className='post-main' />
      <div className={styles['image-container']}>
        <Image src={imageUrl} alt={imageAlt} layout='fill' objectFit='cover'></Image>
      </div>
    </div>
  );
}
