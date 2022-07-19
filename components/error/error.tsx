import Link from 'next/link';

import styles from './error.module.scss';

export default function CustomError({ statusCode }: { statusCode: number | undefined }) {
  return (
    <div className={styles.error}>
      {statusCode === 404 ? (
        <h1>404 - Page Not Found</h1>
      ) : statusCode ? (
        <h1>{statusCode} - An error occurred</h1>
      ) : (
        <h1>An error occurred</h1>
      )}
      <Link href='/'>
        <a>Go back home</a>
      </Link>
    </div>
  );
}
