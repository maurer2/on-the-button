import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen, within } from '@testing-library/react';

import { openPage } from '#/helpers/tests-helpers';

describe('Button with aria-pressed attribute', () => {
  const routePath = '/button-with-aria-pressed-attribute';

  describe('General page', () => {
    it('should render', async () => {
      await openPage(routePath);

      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('main')).not.toBeEmptyDOMElement();
    });

    it('should show main parts', async () => {
      await openPage(routePath);

      expect(
        screen.getByRole('heading', { level: 1, name: 'Button with aria-pressed attribute' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: 'On this page' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Code' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Example' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Use cases' })).toBeInTheDocument();
    });

    it.skip('should match aria-snapshot', async () => {
      await openPage(routePath);

      // @ts-expect-error not implemented yet https://github.com/vitest-dev/vitest/pull/9668
      expect(screen.getByRole('main')).toMatchAriaSnapshot();
    });
  });

  describe('Example button', () => {
    it('should render the example button', async () => {
      await openPage(routePath);

      const exampleSection = within(screen.getByRole('region', { name: 'Example' }));
      const button = exampleSection.getByRole('button', { name: 'Button label' });

      expect(button).toBeInTheDocument();
      expect(button).not.toBePressed();
    });

    it('should toggle the pressed status on click', async () => {
      const user = userEvent.setup();

      await openPage(routePath);

      const exampleSection = within(screen.getByRole('region', { name: 'Example' }));
      const button = exampleSection.getByRole('button', { name: 'Button label' });

      expect(button).not.toBePressed();

      await user.click(button);
      expect(button).toBePressed();

      await user.click(button);
      expect(button).not.toBePressed();
    });
  });
});
