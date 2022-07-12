import Image from "next/image";

import { getFirstNKeywords } from "../../lib/keywords";
import { categoriesArray } from "../../lib/categories";

import styles from "./post-header-info.module.scss";

type PostHeaderInfoProps = {
  postInfo: {
    authorImage: string;
    authorName: string;
    publishedAt: string;
    postCategory: string;
    keywords: string;
  };
  className: string;
};

export default function PostHeaderInfo({
  postInfo: { authorImage, authorName, publishedAt, postCategory, keywords },
  className,
}: PostHeaderInfoProps) {
  const datePublished = new Date(publishedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });
  const [monthPublished, yearPublished] = datePublished.split(" ");

  const { color } = categoriesArray.find(
    (category) => category.name.toLowerCase() === postCategory
  ) || {
    color: "",
  };

  return (
    <div className={styles[className]}>
      <div className={styles["post-info"]}>
        <ul className={styles.list}>
          <li className={styles["avatar-container"]}>
            <Image
              src={`${authorImage}?&h=50&w=50&fit=crop&crop=center`}
              alt={`${authorName} avatar`}
              width={50}
              height={50}
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>{authorName}</li>
          <li className={styles["date-published"]}>
            <span>&#183;</span>
            <span className={styles["month-published"]}>{monthPublished}</span>
            <span>{yearPublished}</span>
          </li>
        </ul>
        <ul className={styles.keywords}>
          {getFirstNKeywords(keywords, 2).map((keyword) => (
            <li className={`${styles[color]}`} key={keyword}>
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
