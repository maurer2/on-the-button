type PageNavItem = {
  href: string;
  label: string;
};

type PageHeaderProps =
  | {
      pageTitle: string;
      navItems: undefined;
      navTitle: undefined;
      navId: undefined;
    }
  | {
      pageTitle: string;
      navItems: PageNavItem[];
      navTitle: string;
      navId: string;
    };

export default function PageHeader({ pageTitle, navItems, navTitle, navId }: PageHeaderProps) {
  return (
    <header>
      <h1 className="mb-4">{pageTitle}</h1>
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
