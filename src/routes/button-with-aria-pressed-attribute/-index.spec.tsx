import { describe, expect, it } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '../../routeTree.gen';

// https://dev.to/daelmaak/how-to-test-tanstack-router-4f51
async function setupRouter() {
  const router = createRouter({
    defaultPendingMinMs: 0,
    routeTree,
  });
  render(<RouterProvider<typeof router> router={router} />);

  return router;
}

describe('Button with aria-pressed attribute', () => {
  const routePath = '/button-with-aria-pressed-attribute';

  describe('General page', () => {
    it('should render', async () => {
      const router = await setupRouter();
      await act(async () => {
        await router.navigate({
          to: routePath,
        });
      });

      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('main')).not.toBeEmptyDOMElement();
    });

    it('should show main parts', async () => {
      const router = await setupRouter();
      await act(async () => {
        await router.navigate({
          to: routePath,
        });
      });

      expect(
        screen.getByRole('heading', { level: 1, name: 'Button with aria-pressed attribute' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: 'On this page' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Code' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Example' })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Use cases' })).toBeInTheDocument();
    });
  });

  describe.todo('Button accesibility', () => {
    it('should render the button', async () => {
      const router = await setupRouter();
      await act(async () => {
        await router.navigate({
          to: routePath,
        });
      });

      expect(screen.getByRole('button', { name: 'Button label' })).toBeInTheDocument();
    });
  });
});
