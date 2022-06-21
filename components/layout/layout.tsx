import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout({ children, showCategories }: LayoutProps) {
  return (
    <div className='layout'>
      <Header showCategories={showCategories} />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
}
