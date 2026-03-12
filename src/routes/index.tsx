import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <main className="page-wrap px-4 py-12">
        <header>
          <h1>Home</h1>
        </header>
        <section>
          <h2>Pages</h2>
          <ul>
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
        </section>
      </main>
    </>
  );
}
