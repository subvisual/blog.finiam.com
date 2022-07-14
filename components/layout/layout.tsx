import Header from "../header/header";
import Footer from "../footer/footer";
import Categories from "../categories/categories";

import styles from "./layout.module.scss";
import MetaHead from "../meta-head/head";

type LayoutProps = {
  children: React.ReactNode;
  showCategories: boolean;
};

export default function Layout({ children, showCategories }: LayoutProps) {
  return (
    <>
      <MetaHead />
      <div className={styles["layout"]}>
        <Header />
        <div className={styles["main-wrapper"]}>
          <div className={styles["content"]}>{children}</div>
          {showCategories && (
            <div className={styles["categories-container"]}>
              <Categories />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
