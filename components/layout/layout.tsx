import Header from "../header/header";
import Footer from "../footer/footer";
import Categories from "../categories/categories";

import styles from "./layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
  showCategories: boolean;
};

export default function Layout({ children, showCategories }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles["main-wrapper"]}>
        <section className={styles.content}>{children}</section>
        {showCategories && (
          <section className={styles["categories-container"]}>
            <Categories />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
