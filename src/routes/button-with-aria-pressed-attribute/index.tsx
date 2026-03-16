import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export const Route = createFileRoute('/button-with-aria-pressed-attribute/')({
  component: ButtonWithAriaPressedAttribute,
});

function ButtonWithAriaPressedAttribute() {
  const [isPressed, toggleIsPressed] = useReducer((currentIsPressed) => !currentIsPressed, false);

  const button = (
    <button
      aria-pressed={isPressed}
      type="button"
      onClick={toggleIsPressed}
      className="border px-4 py-2 hover:text-red-500 hover:underline focus-visible:text-red-500 focus-visible:underline aria-pressed:bg-white aria-pressed:text-black"
    >
      Button label
    </button>
  );
  const buttonAsString = reactElementToJSXString(button, {
    filterProps: ['onClick', 'className', 'data-tsd-source'],
    useBooleanShorthandSyntax: false, // keep aria-pressed={false}
    tabStop: 4,
  });

  return (
    <main className="mx-auto flex w-[min(100%,100ch)] flex-col gap-6 p-4">
      <header>
        <h1 className="mb-4">Button with aria-pressed attribute</h1>
        <nav aria-labelledby="on-this-page">
          <h2 id="on-this-page">On this page</h2>
          <ul className="list list-inside list-disc">
            <li>
              <a href="#code">Code</a>
            </li>
            <li>
              <a href="#example">Example</a>
            </li>
            <li>
              <a href="#use-case">Use cases</a>
            </li>
            <li>
              <a href="#screen-readers">Screen readers</a>
            </li>
            <li>
              <a href="#testing">Testing</a>
            </li>
          </ul>
        </nav>
      </header>

      <section aria-labelledby="code">
        <h2 id="code">Code</h2>
        <pre>
          <code>{buttonAsString}</code>
        </pre>
      </section>

      <section aria-labelledby="example">
        <h2 id="example">Example</h2>
        {button}
      </section>

      <section aria-labelledby="use-case">
        <h2 id="use-case">Use cases</h2>
        <p>Text</p>
      </section>

      <section aria-labelledby="screen-readers">
        <h2 id="screen-readers">Screen readers</h2>
        <h3 className="mb-4">Mac voice over</h3>
        <dl>
          <div className="mb-4">
            <dt>Selected when not pressed</dt>
            <dd className="italic">"Button Label", "toggle button", "Example", region</dd>
          </div>

          <div className="mb-4">
            <dt>Toggled to pressed while selected</dt>
            <dd className="italic">"selected", "Button Label", "toggle button"</dd>
          </div>
          <div className="mb-4">
            <dt>Selected when pressed</dt>
            <dd className="italic">
              "Button Label", "selected" "toggle button", "Example", region
            </dd>
          </div>
          <div className="mb-4">
            <dt>Toggled to not pressed while selected</dt>
            <dd className="italic">"Button Label", "toggle button"</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="testing">
        <h2 id="testing">Testing</h2>
        <ul>
          <li>
            <pre>
              <code>{`screen.getByRole('button', { name: 'Button label' })`}</code>
            </pre>
          </li>
          <li>
            <pre>
              <code>{`screen.getByRole('button', { name: 'Button label', pressed: true })`}</code>
            </pre>
          </li>
          <li>
            <pre>
              <code>{`screen.getByRole('button', { name: 'Button label', pressed: false })`}</code>
            </pre>
          </li>
        </ul>
      </section>
    </main>
  );
}
