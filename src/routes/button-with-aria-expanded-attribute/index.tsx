import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/button-with-aria-expanded-attribute/')({
  component: ButtonWithAriaExpandedAttribute,
});

function ButtonWithAriaExpandedAttribute() {
  return <div>Hello "/button-with-aria-expand-attribute/page"!</div>;
}
