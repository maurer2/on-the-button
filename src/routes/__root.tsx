import { Outlet, createRootRoute, useLocation, Link } from '@tanstack/react-router';
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
// import { TanStackDevtools } from '@tanstack/react-devtools';

import '../styles.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  return (
    <>
      <header>
        <Link to="/" className="mb-6 block text-2xl">
          On the button
        </Link>
        <nav aria-label="Main nav">
          {/* https://www.joren.co/flex-grow-9999-hack/ */}
          <ul className="flex flex-wrap gap-4 [&>li]:contents [&>li>a]:grow-9999 [&>li>a]:border [&>li>a]:p-2">
            <li>
              <Link to="/button-with-aria-pressed-attribute">
                Button with aria-pressed attribute
              </Link>
            </li>
            <li>
              <Link to="/button-with-switch-role-and-aria-checked-attribute">
                Button with role="switch" and aria-checked attribute
              </Link>
            </li>
            <li>
              <Link to="/plain-checkbox">Plain checkbox</Link>
            </li>
            <li>
              <Link to="/checkbox-with-switch-role">Checkbox with role="switch"</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      {!isHomepage ? <Link to="/">Home</Link> : null}

      {/* <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
    </>
  );
}
