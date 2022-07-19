import Error from 'next/error';
import { NextPageContext } from 'next';

import CustomError from '../components/error/error';

type ErrorPageProps = {
  statusCode: number | undefined;
};

function ErrorPage({ statusCode }: ErrorPageProps) {
  return <CustomError statusCode={statusCode} />;
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
