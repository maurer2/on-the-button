import { Outlet, createRootRoute, useLocation, Link } from '@tanstack/react-router';
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
// import { TanStackDevtools } from '@tanstack/react-devtools';
import MainNav from '../components/MainNav';

import '../styles.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  return (
    <>
      <header className="mx-auto flow-root px-4 inline-[min(100%,100ch)]">
        <h2>Navigation</h2>
        <MainNav />
        {!isHomepage ? (
          <Link
            to="/"
            className="ms-auto mbs-4 block outline-offset-4 outline-black inline-fit focus-visible:outline-solid"
          >
            Go back
          </Link>
        ) : null}
      </header>
      <Outlet />
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
