import Link from 'next/link';

import Categories from '../categories/categories';
import Button, { BUTTON_COLORS } from '../button/button';
import FiniamLogo from '../finiam-logo/finiam-logo';

import styles from './header.module.scss';

export default function Header({ showCategories }: HeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className='navbar-logo'>
            <FiniamLogo />
          </a>
        </Link>
        <div className={styles['navbar-wrapper']}>
          <div className='navbar-links'>
            <a href='https://finiam.com/about' className={styles['navbar-link']}>
              About
            </a>
            <a href='https://finiam.com/work' className={styles['navbar-link']}>
              Work
            </a>
            <Link href='/'>
              <a className={styles['navbar-link']}>Blog</a>
            </Link>
            <a href='https://finiam.com/contact' className={styles['navbar-link']}>
              Contact
            </a>
          </div>
          <div className={styles['navbar-cta']}></div>
          <Button
            className='cta-nav'
            buttonColor={BUTTON_COLORS.Violet}
            href={'https://finiam.homerun.co/'}
          >
            We&apos;re hiring
          </Button>
        </div>
      </nav>
      {showCategories && <Categories />}
    </header>
  );
}
