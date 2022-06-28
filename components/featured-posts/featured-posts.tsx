import { Fragment } from 'react';

import PostPreview from '../post-preview/post-preview';

import styles from './featured-posts.module.scss';

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <div className={styles['featured-posts']}>
      {posts.map((post, idx) => (
        <PostPreview key={post.slug.current} post={post} isFirst={idx === 0 ? true : false} />
      ))}
    </div>
  );
}
