import { Fragment } from 'react';
import Link from 'next/link';

import PostPreview from '../post-preview/post-preview';

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <Fragment>
      {posts.map(post => (
        <PostPreview key={post.slug.current} post={post} />
      ))}
    </Fragment>
  );
}
