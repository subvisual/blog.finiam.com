import Link from 'next/link';

import Button, { BUTTON_COLORS } from '../button/button';
import FiniamLogo from '../finiam-logo/finiam-logo';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className='navbar-logo'>
            <FiniamLogo />
          </a>
        </Link>
        <ul className={styles['nav-links']}>
          <li>
            <a href='https://finiam.com/about' className={styles['navbar-link']}>
              About
            </a>
          </li>
          <li>
            <a href='https://finiam.com/work' className={styles['navbar-link']}>
              Work
            </a>
          </li>
          <li>
            <Link href='/'>
              <a className={styles['navbar-link']}>Blog</a>
            </Link>
          </li>
          <li>
            <a href='https://finiam.com/contact' className={styles['navbar-link']}>
              Contact
            </a>
          </li>
          <li>
            <Button
              className='cta-nav'
              buttonColor={BUTTON_COLORS.Violet}
              href={'https://finiam.homerun.co/'}
            >
              We&apos;re hiring
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
