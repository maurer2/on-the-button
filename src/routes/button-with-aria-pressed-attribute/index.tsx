import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection from '../../components/PageSection';
import ButtonComponent from '../../components/ButtonComponent';
import useElementAsString from '../../hooks/useElementAsString';
import { navItemsList } from '#/constants/nav-items-list';

export const Route = createFileRoute('/button-with-aria-pressed-attribute/')({
  component: ButtonWithAriaPressedAttribute,
});

const navItems = [
  navItemsList['code'],
  navItemsList['example'],
  navItemsList['usage'],
  navItemsList['testing'],
];
type NavItemLabel = (typeof navItems)[number]['label'];

function ButtonWithAriaPressedAttribute() {
  const [isPressed, toggleIsPressed] = useReducer((currentIsPressed) => !currentIsPressed, false);

  const Button = (
    <ButtonComponent aria-pressed={isPressed} onClick={toggleIsPressed}>
      Button label
    </ButtonComponent>
  );
  const buttonMarkup = useElementAsString(Button);

  return (
    <main className="mx-auto flex flex-col gap-6 px-4 inline-[min(100%,100ch)]">
      <PageHeader
        pageTitle={'Button with "aria-pressed" attribute'}
        navTitle="On this page"
        navItems={navItems}
        navId="on-this-page"
      />

      <PageSection<NavItemLabel> title="Code" id="code">
        <pre>
          <code>{buttonMarkup}</code>
        </pre>
      </PageSection>

      <PageSection<NavItemLabel> title="Example" id="example">
        {Button}
      </PageSection>

      <PageSection<NavItemLabel> title="Usage" id="usage">
        <ul className="list mb-4 list-inside list-disc">
          <li>Is used to indicate the current state of a button ("Pressed"/"Not pressed")</li>
          <li>Triggers an action on a toggle button inside or outside a toolbar</li>
          <li>
            The label shouldn't change between toggle states as to not confuse users of screen
            readers (
            <a href="https://github.com/w3c/aria-practices/issues/121">W3C ARIA Practices</a> and{' '}
            <a href="https://github.com/w3c/wcag/issues/2038#issuecomment-920555350">W3C WCAG</a>)
          </li>
          <li>
            Value of the "aria-pressed" attribute not send to server on submit (if button has a name
            and value-attribute)
          </li>
          <li>
            Can theretically be used for toggling the visibility of content but disclosure buttons
            or details/summary tags are a better
          </li>
        </ul>
      </PageSection>

      <PageSection<NavItemLabel> title="Testing" id="testing">
        <h3 className="mb-4">Mac VoiceOver</h3>
        <dl>
          <div className="mb-4">
            <dt>Selected when not pressed</dt>
            <dd className="italic">"Button Label", "toggle button", "Example", "region"</dd>
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
        <h3>Selectors</h3>
        <ul className="list list-inside list-disc">
          <li>
            <pre className="inline">
              <code>{`screen.getByRole('button', { name: 'Button label' })`}</code>
            </pre>
          </li>
          <li>
            <pre className="inline">
              <code>{`screen.getByRole('button', { name: 'Button label', pressed: true })`}</code>
            </pre>
          </li>
          <li>
            <pre className="inline">
              <code>{`screen.getByRole('button', { name: 'Button label', pressed: false })`}</code>
            </pre>
          </li>
        </ul>
      </PageSection>
    </main>
  );
}
