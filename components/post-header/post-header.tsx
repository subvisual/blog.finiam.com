import Image from "next/image";

import PostHeaderInfo from "../post-header-info/post-header-info";

import styles from "./post-header.module.scss";

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
    imageMetadata: SanityImageMetadata;
  };
};

export default function PostHeader({
  data: {
    title,
    authorImage,
    authorName,
    category,
    publishedAt,
    keywords,
    imageUrl,
    imageAlt,
    imageMetadata,
  },
}: PostHeaderProps) {
  const postHeaderInfo = {
    authorImage,
    authorName,
    publishedAt,
    postCategory: category,
    keywords,
  };

  return (
    <div className={styles["post-header"]}>
      <div className={styles["header-wrapper-top"]}>
        <h1 className={styles["post-title"]}>{title}</h1>
        <PostHeaderInfo postInfo={postHeaderInfo} className="post-main" />
      </div>
      <div className={styles["image-container"]}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageMetadata.dimensions.width}
          height={imageMetadata.dimensions.height}
          blurDataURL={imageMetadata.lqip}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </div>
  );
}
