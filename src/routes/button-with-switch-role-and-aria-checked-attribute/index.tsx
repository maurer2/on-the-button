import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection, { type PageSectionProps } from '../../components/PageSection';
import ButtonComponent from '../../components/ButtonComponent';
import useElementAsString from '../../hooks/useElementAsString';
import { navItemsList } from '#/constants/nav-items-list';

export const Route = createFileRoute('/button-with-switch-role-and-aria-checked-attribute/')({
  component: ButtonWithSwitchRoleAndAriaCheckedAttribute,
});

export function Section(props: PageSectionProps<NavItemLabel>) {
  return <PageSection<NavItemLabel> {...props} />;
}

const navItems = [navItemsList['code'], navItemsList['example']];
type NavItemLabel = (typeof navItems)[number]['label'];

function ButtonWithSwitchRoleAndAriaCheckedAttribute() {
  const [isEnabled, toggleIsEnabled] = useReducer((currentIsEnabled) => !currentIsEnabled, false);

  const Component = (
    <ButtonComponent
      type="button"
      onClick={toggleIsEnabled}
      role="switch"
      aria-checked={isEnabled}
      // only for sighted users, screen readers announce the value of the "aria-checked" attribute instead
      className="after:content-['off'] aria-checked:after:content-['on']"
    >
      Setting X {''}
    </ButtonComponent>
  );
  const markup = useElementAsString(Component);

  return (
    <main className="mx-auto flow-root px-4 inline-[min(100%,100ch)]">
      <PageHeader
        pageTitle={'Button with role "switch" and "aria-checked"-attribute'}
        navTitle="On this page"
        navItems={navItems}
        navId="on-this-page"
      />

      <Section title="Code" id="code">
        <pre>
          <code>{markup}</code>
        </pre>
      </Section>

      <Section title="Example" id="example">
        {Component}
      </Section>
    </main>
  );
}
