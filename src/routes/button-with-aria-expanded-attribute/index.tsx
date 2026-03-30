import { createFileRoute } from '@tanstack/react-router';
import { useReducer } from 'react';

import PageHeader from '../../components/PageHeader';
import PageSection, { type PageSectionProps } from '../../components/PageSection';
import ButtonComponent from '../../components/ButtonComponent';
import useElementAsString from '../../hooks/useElementAsString';
import { navItemsList } from '#/constants/nav-items-list';

export const Route = createFileRoute('/button-with-aria-expanded-attribute/')({
  component: ButtonWithAriaExpandedAttribute,
});

const navItems = [navItemsList['code'], navItemsList['example'], navItemsList['usage']];
type NavItemLabel = (typeof navItems)[number]['label'];

export function Section(props: PageSectionProps<NavItemLabel>) {
  return <PageSection<NavItemLabel> {...props} />;
}

function ButtonWithAriaExpandedAttribute() {
  const [isExpanded, toggleIsExpanded] = useReducer(
    (currentIsExpanded) => !currentIsExpanded,
    false,
  );

  const Component = (
    <search>
      <form onSubmit={(event) => event.preventDefault()} className="flex flex-col items-start">
        <ButtonComponent
          type="button"
          onClick={toggleIsExpanded}
          aria-expanded={isExpanded}
          aria-controls="sound-filters"
        >
          Show sound filters
        </ButtonComponent>
        <fieldset id="sound-filters" hidden={!isExpanded} className="mbs-4">
          <legend className="mbe-4">Sound filters</legend>
          <div className="mbe-4 flex flex-col">
            <label htmlFor="sound-name">Sound name</label>
            <input
              type="text"
              id="sound-name"
              name="sound-name"
              value="Meowzart"
              className="border px-4 py-2"
            />
          </div>
          <div className="mbe-6 flex flex-col">
            <label htmlFor="sound-type">Sound type</label>
            <input
              type="text"
              id="sound-type"
              name="sound-type"
              value="Meow"
              className="border px-4 py-2"
            />
          </div>
          <ButtonComponent type="submit">Add filters</ButtonComponent>
        </fieldset>
      </form>
    </search>
  );
  const markup = useElementAsString(Component);

  return (
    <main className="mx-auto flex flex-col gap-6 px-4 inline-[min(100%,100ch)]">
      <PageHeader
        pageTitle={'Button with "aria-expanded" attribute'}
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

      <Section title="Usage" id="usage">
        <ul className="list mb-4 list-inside list-disc">
          <li>Toggle buttons that affect the visibility of related content</li>
          <li>
            Defines a relationship between the toggle button and the element that is toggled via the
            "aria-controls" attribute
          </li>
          <li>
            The button label shouldn't change between expand and collapse states as to not confuse
            users of screen readers
          </li>
          <li>
            Only changes the visibility of form fields but doesn't affect the form state as the
            state of the "aria-expanded"-attribute is not part of the form state. A checkbox would
            be appropriate if the search filters toggle represents a user preference like "Enable
            custom filters" that affect the form state and reveale additional options
          </li>
          <li>Can sometimes be replaced with details/summary elements</li>
        </ul>
      </Section>
    </main>
  );
}
