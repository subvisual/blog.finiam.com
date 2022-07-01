import Link from 'next/link';
import Image from 'next/image';

import { getFirstNKeywords } from '../../lib/keywords';
import { categoriesArray } from '../../lib/categories';

import styles from './post-header-info.module.scss';

type PostHeaderInfoProps = {
  authorImage: string;
  authorName: string;
  publishedAt: string;
  postCategory: string;
  keywords: string;
};

export default function PostHeaderInfo({
  authorImage,
  authorName,
  publishedAt,
  postCategory,
  keywords,
}: PostHeaderInfoProps) {
  const datePublished = new Date(publishedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
  });
  const [monthPublished, yearPublished] = datePublished.split(' ');

  const { color } = categoriesArray.find(
    category => category.name.toLowerCase() === postCategory
  ) || {
    color: 'lightgrey',
  };

  return (
    <div className={styles['post-info']}>
      <ul className={styles.list}>
        <li className={styles['avatar-container']}>
          <Image src={authorImage} alt={`${authorName} avatar`} layout='fill' objectFit='cover' />
        </li>
        <li>{authorName}</li>
        <li className={styles['date-published']}>
          <span>&#183;</span>
          <span className={styles['month-published']}>{monthPublished}</span>
          <span>{yearPublished}</span>
        </li>
      </ul>
      <ul className={styles.keywords}>
        {getFirstNKeywords(keywords, 2).map(keyword => (
          <li className={`${styles[color]}`} key={keyword}>
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}
