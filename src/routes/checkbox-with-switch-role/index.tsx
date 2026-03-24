import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/checkbox-with-switch-role/')({
  component: CheckboxWithSwitchRole,
});

function CheckboxWithSwitchRole() {
  const code = `
    <label for="checkbox">
      Text
    </label>
    <input type="checkbox" name="checkbox" id="checkbox" value="value" role="switch" />
    `;

  return (
    <main className="mx-auto flow-root px-4 inline-[min(100%,100ch)]">
      <header>
        <h1>Checkbox with role="switch"</h1>
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
