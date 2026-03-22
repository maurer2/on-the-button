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
  navItemsList['useCase'],
  navItemsList['screenReaders'],
  navItemsList['gotchas'],
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

      <PageSection<NavItemLabel> title="Use cases" id="use-case">
        <ul className="list mb-4 list-inside list-disc">
          <li>Toggle buttons for two states (Play/Pause, On/Off)</li>
        </ul>
      </PageSection>

      <PageSection<NavItemLabel> title="Screen readers" id="screen-readers">
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
      </PageSection>

      <PageSection<NavItemLabel> title="Gotchas" id="gotchas">
        <ul className="list list-inside list-disc">
          <li>
            The label shouldn't change between toggle states as to not confuse users of screen
            readers (
            <a href="https://github.com/w3c/aria-practices/issues/121">W3C ARIA Practices</a> and{' '}
            <a href="https://github.com/w3c/wcag/issues/2038#issuecomment-920555350">W3C WCAG</a>)
          </li>
          <li>
            Value of aria-pressed not send to server on submit (if button has a name and
            value-attribute)
          </li>
          <li>
            Can be used for toggling hidden content but disclosure buttons or details/summary tags
            are probably the better approach
          </li>
        </ul>
      </PageSection>

      <PageSection<NavItemLabel> title="Testing" id="testing">
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
