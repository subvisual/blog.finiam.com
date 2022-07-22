import CustomError from '../components/error/error';

export default function Custom404() {
  return <CustomError statusCode={404} />;
}
