import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getAllCategories } from '../../lib/api';
import Button, { BUTTON_COLORS } from '../button/button';

export default function Categories() {
  // const [categories, setCategories] = useState<string[]>([]);

  // useEffect(() => {
  //   const getCategoriesArray = async () => {
  //     const { allPost }: PostCategories = await getAllCategories();
  //     const categoriesArray = Array.from(new Set(allPost.map(item => item.category)));
  //     console.log(allPost);
  //     setCategories(categoriesArray);
  //   };
  //   getCategoriesArray();
  // }, []);
  const categories = [
    { name: 'All Blog Posts ', color: BUTTON_COLORS.White, href: '/' },
    { name: 'Design', color: BUTTON_COLORS.Green, href: '/tags/design' },
    { name: 'Development', color: BUTTON_COLORS.Purple, href: '/tags/development' },
    { name: 'Team', color: BUTTON_COLORS.Pink, href: '/tags/team' },
    { name: 'Other', color: BUTTON_COLORS.Red, href: '/' },
  ];

  return (
    <div className='categories'>
      {categories.map(({ name, color, href }) => (
        <Button key={name} buttonColor={color} href={href}>
          {name}
        </Button>
      ))}
    </div>
  );
}
