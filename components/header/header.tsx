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
            <Link href='#'>
              <a className={styles['navbar-link']}>About</a>
            </Link>
            <Link href='#'>
              <a className={styles['navbar-link']}>Work</a>
            </Link>
            <Link href='#'>
              <a className={styles['navbar-link']}>Blog</a>
            </Link>
            <Link href='#'>
              <a className={styles['navbar-link']}>Contact</a>
            </Link>
          </div>
          <div className={styles['navbar-cta']}></div>
          <Button className='cta' buttonColor={BUTTON_COLORS.Violet} href={'#'}>
            We&apos;re hiring
          </Button>
        </div>
      </nav>
      {showCategories && <Categories />}
    </header>
  );
}
