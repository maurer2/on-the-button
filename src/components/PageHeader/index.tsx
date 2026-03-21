type PageNavItem = {
  href: string;
  label: string;
};

type PageHeaderProps =
  | {
      pageTitle: string;
      navTitle: undefined;
      navItems: undefined;
      navId: undefined;
    }
  | {
      pageTitle: string;
      navTitle: string;
      navItems: PageNavItem[];
      navId: string;
    };

export default function PageHeader({ pageTitle, navTitle, navItems, navId }: PageHeaderProps) {
  return (
    <header>
      <h1>{pageTitle}</h1>
      {navItems?.length ? (
        <nav aria-labelledby={navId}>
          <h2 id={navId}>{navTitle}</h2>
          <ul className="list list-inside list-disc">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
