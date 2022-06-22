import Button, { BUTTON_COLORS } from '../button/button';

import styles from './categories.module.scss';

export default function Categories() {
  const categories = [
    { name: 'All Blog Posts ', color: BUTTON_COLORS.White, href: '/' },
    { name: 'Design', color: BUTTON_COLORS.Pistachio, href: '/tags/design' },
    { name: 'Development', color: BUTTON_COLORS.Violet, href: '/tags/development' },
    { name: 'Team', color: BUTTON_COLORS.Pink, href: '/tags/team' },
    { name: 'Other', color: BUTTON_COLORS.Orange, href: '/' },
  ];

  return (
    <div className={styles.categories}>
      {categories.map(({ name, color, href }) => (
        <Button key={name} buttonColor={color} href={href}>
          {name}
        </Button>
      ))}
    </div>
  );
}
