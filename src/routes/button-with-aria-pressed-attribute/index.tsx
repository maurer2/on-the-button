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
              <a href="#screen-readers-and-testing-tools">Screen readers and Testing tools</a>
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
        <div className="[&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button:focus-within]:text-red-500 [&>button:focus-within]:underline [&>button:hover]:underline">
          {button}
        </div>
      </section>

      <section aria-labelledby="use-case">
        <h2 id="use-case">Use cases</h2>
        <p>Text</p>
      </section>

      <section aria-labelledby="screen-readers-and-testing-tools">
        <h2 id="screen-readers-and-testing-tools">Screen readers and Testing tools</h2>
        <p>Text</p>
      </section>
    </main>
  );
}
