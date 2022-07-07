import Link from 'next/link';
import { useState } from 'react';

import Button, { BUTTON_COLORS } from '../button/button';
import FiniamLogo from '../finiam-logo/finiam-logo';

import styles from './header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles['header-wrapper']} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles['nav-main']}>
          <Link href='/'>
            <a className={`${styles['nav-logo']} ${isMenuOpen ? styles.light : styles.dark}`}>
              <FiniamLogo />
            </a>
          </Link>

          <div onClick={toggleMenu} className={styles['menu-toggle']}>
            <span className={styles['top-line']}></span>
            <span className={styles['bottom-line']}></span>
          </div>
          <ul className={styles['nav-links-main']}>
            <li>
              <a href='https://finiam.com/about' className={styles['nav-link']}>
                About
              </a>
            </li>
            <li>
              <a href='https://finiam.com/work' className={styles['nav-link']}>
                Work
              </a>
            </li>
            <li>
              <Link href='/'>
                <a className={styles['nav-link']}>Blog</a>
              </Link>
            </li>
            <li>
              <a href='https://finiam.com/contact' className={styles['nav-link']}>
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
        <div className={styles['nav-mobile']}>
          <div className={styles['mobile-wrapper']}>
            <ul className={styles['nav-links-mobile']}>
              <li>
                <a href='https://finiam.com/about' className={styles['nav-link']}>
                  About
                </a>
              </li>
              <li>
                <a href='https://finiam.com/work' className={styles['nav-link']}>
                  Work
                </a>
              </li>
              <li>
                <Link href='/'>
                  <a className={styles['nav-link']}>Blog</a>
                </Link>
              </li>
              <li>
                <a href='https://finiam.com/contact' className={styles['nav-link']}>
                  Contact
                </a>
              </li>
            </ul>
            <div className={styles['ctas-mobile']}>
              <div className={styles['ctas-wrapper-top']}>
                <Button
                  className='cta'
                  buttonColor={BUTTON_COLORS.Green}
                  href={'https://finiam.homerun.co/'}
                >
                  Join our team
                </Button>
                <Button
                  className='cta'
                  buttonColor={BUTTON_COLORS.Transparent}
                  href={'mailto:contact@finiam.com'}
                >
                  contact@finiam.com
                </Button>
              </div>
              <div className={styles['ctas-wrapper-bottom']}>
                <Button
                  className='cta-social'
                  buttonColor={BUTTON_COLORS.Transparent}
                  href={'https://twitter.com/wearefiniam'}
                >
                  TW
                </Button>
                <Button
                  className='cta-social'
                  buttonColor={BUTTON_COLORS.Transparent}
                  href={'https://www.linkedin.com/company/finiam/'}
                >
                  IN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
