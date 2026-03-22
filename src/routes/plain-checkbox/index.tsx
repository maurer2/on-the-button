import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection, { type PageSectionProps } from '../../components/PageSection';
import CheckboxComponent from '../../components/CheckboxComponent';
import useElementAsString from '../../hooks/useElementAsString';
import { navItemsList } from '#/constants/nav-items-list';

export const Route = createFileRoute('/plain-checkbox/')({
  component: PlainCheckbox,
});

const navItems = [
  navItemsList['code'],
  navItemsList['example'],
  navItemsList['useCase'],
  navItemsList['gotchas'],
];
type NavItemLabel = (typeof navItems)[number]['label'];

// type PageSectionProps = ComponentProps<typeof PageSection>;
export function Section(props: PageSectionProps<NavItemLabel>) {
  return <PageSection<NavItemLabel> {...props} />;
}

function PlainCheckbox() {
  const [isChecked, toggleIsChecked] = useReducer((currentIsPressed) => !currentIsPressed, false);

  const Checkbox = (
    <CheckboxComponent label="Checkbox" onChange={toggleIsChecked} checked={isChecked} />
  );
  const markup = useElementAsString(Checkbox);

  return (
    <main className="mx-auto flex flex-col gap-6 px-4 inline-[min(100%,100ch)]">
      <PageHeader
        pageTitle="Checkbox"
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
        {Checkbox}
      </Section>

      <Section title="Use cases" id="use-case">
        <ul className="list mb-4 list-inside list-disc">
          <li>State handling in forms</li>
          <li>Represents form state and a change modifies form data</li>
          <li>Not ideal for triggering actions</li>
        </ul>
      </Section>

      <Section title="Gotchas" id="gotchas">
        <ul className="list mb-4 list-inside list-disc">
          <li>Support 3 states (checked, not-checked and intermediate)</li>
          <li>Included in formData</li>
          <li>Browser updates checked state automatically</li>
        </ul>
      </Section>
    </main>
  );
}
