import Link from "next/link";

import Button from "../button/button";
import categoriesArray from "../../lib/categories";

import styles from "./categories.module.scss";

export default function Categories() {
  return (
    <div className={styles.categories}>
      {categoriesArray.map(({ name, color, href }) => (
        <Link href={href} key={name} passHref>
          <Button buttonColor={color}>{name}</Button>
        </Link>
      ))}
    </div>
  );
}
