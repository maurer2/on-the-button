import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/button-with-aria-pressed-attribute/')({
  component: ButtonWithAriaPressedAttribute,
});

function ButtonWithAriaPressedAttribute() {
  return (
    <main className="page-wrap px-4 py-12">
      <header>
        <h1>Button with aria-pressed attribute</h1>
        <p>Description</p>
        {/* <nav>
          <ul>
            <li></li>
          </ul>
        </nav> */}
      </header>
      <section>
        <h2>Code</h2>
        <pre>
          <code>
            <button aria-pressed="false" type="button" className="border p-2">
              Text
            </button>
          </code>
        </pre>
      </section>
    </main>
  );
}
