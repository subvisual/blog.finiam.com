import Link from "next/link";

import styles from "./error.module.scss";

export default function CustomError({
  statusCode,
}: {
  statusCode: number | undefined;
}) {
  return (
    <div className={styles.error}>
      {statusCode === 404 ? (
        <h1>{statusCode} - An error occurred</h1>
      ) : (
        <h1>{statusCode && `${statusCode} - `}An error occurred</h1>
      )}
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}
