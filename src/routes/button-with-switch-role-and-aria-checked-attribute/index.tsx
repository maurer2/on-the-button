import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/button-with-switch-role-and-aria-checked-attribute/')({
  component: ButtonWithSwitchRoleAndAriaCheckedAttribute,
});

function ButtonWithSwitchRoleAndAriaCheckedAttribute() {
  const code = `
    <button role="switch" aria-checked="true" type="button">
      Text
    </button>
  `;

  return (
    <main className="page-wrap px-4 py-12">
      <header>
        <h1>Button with role="switch" and aria-checked attribute</h1>
        <p>Text</p>
        {/* <nav>
          <ul>
            <li></li>
          </ul>
        </nav> */}
      </header>
      <section>
        <h2>Code</h2>
        <pre>
          <code>{code}</code>
        </pre>
      </section>
    </main>
  );
}
