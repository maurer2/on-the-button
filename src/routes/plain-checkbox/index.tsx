import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/plain-checkbox/')({
  component: PlainCheckbox,
});

function PlainCheckbox() {
  const code = `
    <label for="checkbox">
      Text
    </label>
    <input type="checkbox" name="checkbox" id="checkbox" value="value" />
  `;

  return (
    <main className="page-wrap px-4 py-12">
      <header>
        <h1>Plain checkbox</h1>
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
