import Header from '../header/header';
import Footer from '../footer/footer';
import Categories from '../categories/categories';

import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  showCategories: boolean;
};

export default function Layout({ children, showCategories }: LayoutProps) {
  return (
    <div className='layout'>
      <Header />
      <div className={styles['wrapper-content']}>
        <div className='content'>{children}</div>
        {showCategories && (
          <div className={styles['wrapper-categories']}>
            <Categories />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
