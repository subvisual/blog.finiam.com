import Link from 'next/link';

import Button, { BUTTON_COLORS } from '../button/button';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-wrapper-top']}>
        <ul className={styles['footer-wrapper-top-links']}>
          <li>
            <a href='https://finiam.com/about'>About</a>
          </li>
          <li>
            <a href='https://finiam.com/work'>Work</a>
          </li>
          <li>
            <Link href='/'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <a href='https://finiam.com/contact'>Contacts</a>
          </li>
          <li>
            <a href='https://finiam.homerun.co/'>Careers</a>
          </li>
        </ul>
        <div className={styles['footer-wrapper-top-ctas']}>
          <Button
            className='cta'
            buttonColor={BUTTON_COLORS.White}
            href={'https://calendly.com/jfsgomes/meet-and-greet'}
          >
            Book a call
          </Button>
          <Button
            className='cta'
            buttonColor={BUTTON_COLORS.Pistachio}
            href={'https://finiam.homerun.co/'}
          >
            Join our team
          </Button>
        </div>
      </div>
      <div className={styles['footer-wrapper-middle']}>
        <h2 className={styles['footer-heading']}>Let&apos;s build the next big thing, together.</h2>
      </div>
      <div className={styles['footer-wrapper-bottom']}>
        <Button
          className='cta'
          buttonColor={BUTTON_COLORS.Transparent}
          href={'mailto:contact@finiam.com'}
        >
          contact@finiam.com
        </Button>
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
      <div className={styles.circle}></div>
    </footer>
  );
}
