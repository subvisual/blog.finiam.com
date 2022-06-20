import Link from 'next/link';

import Categories from '../categories/categories';
import Button, { BUTTON_COLORS } from '../button/button';

export default function Header({ showCategories }: HeaderProps) {
  return (
    <div className='header'>
      <div className='navigation'>
        <div className='logo'>
          <Link href='/'>FINIAM</Link>
        </div>
        <div className='nav-links'>
          <Link href='#'>
            <a>About</a>
          </Link>
          <Link href='#'>
            <a>Work</a>
          </Link>
          <Link href='#'>
            <a>Blog</a>
          </Link>
          <Link href='#'>
            <a>Contact</a>
          </Link>
          <Button className='cta' buttonColor={BUTTON_COLORS.Purple} href={'#'}>
            We&apos;re hiring
          </Button>
        </div>
      </div>
      {showCategories && <Categories />}
    </div>
  );
}
