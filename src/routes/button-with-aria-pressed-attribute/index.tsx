// oxlint-disable jsx_a11y/click-events-have-key-events
// oxlint-disable jsx_a11y/no-static-element-interactions
import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';

export const Route = createFileRoute('/button-with-aria-pressed-attribute/')({
  component: ButtonWithAriaPressedAttribute,
});

function ButtonWithAriaPressedAttribute() {
  const [isPressed, toggleIsPressed] = useReducer((currentIsPressed) => !currentIsPressed, false);
  const code = `
    <button aria-pressed="${isPressed ? 'true' : 'false'}" type="button">
      Button label
    </button>
  `;

  return (
    <main className="page-wrap px-4 py-12">
      <header>
        <h1>Button with aria-pressed attribute</h1>
        <p>About this page</p>
        <nav aria-labelledby="on-this-page">
          <h2 id="on-this-page">On this page</h2>
          <ul>
            <li>
              <a href="#code">Code</a>
            </li>
            <li>
              <a href="#example">Example</a>
            </li>
            <li>
              <a href="#use-case">Example</a>
            </li>
          </ul>
        </nav>
      </header>
      <section aria-labelledby="code">
        <h2 id="code">Code</h2>
        <pre>
          <code>{code}</code>
        </pre>
      </section>
      <section aria-labelledby="example">
        <h2 id="example">Example</h2>
        <div
          dangerouslySetInnerHTML={{ __html: code }}
          className="[&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button:focus-within]:text-red-500 [&>button:focus-within]:underline [&>button:hover]:underline"
          onClick={toggleIsPressed} // workaround
        />
      </section>
      <section aria-labelledby="use-case">
        <h2 id="use-case">Use cases</h2>
        <p>Text</p>
      </section>
    </main>
  );
}
