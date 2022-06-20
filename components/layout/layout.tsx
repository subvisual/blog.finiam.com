export default function Layout({ children, showCategories }: LayoutProps) {
  return (
    <div>
      <div className='content'>{children}</div>
    </div>
  );
}
