import { act } from '@testing-library/react';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { render } from 'vitest-browser-react';

import { routeTree } from '../routeTree.gen';

// https://dev.to/daelmaak/how-to-test-tanstack-router-4f51
export async function setupRouter() {
  const router = createRouter({
    defaultPendingMinMs: 0,
    routeTree,
  });
  await render(<RouterProvider<typeof router> router={router} />);

  return router;
}

export async function openPage(routePath: string) {
  const router = await setupRouter();

  await act(async () => {
    await router.navigate({
      to: routePath,
    });
  });
}
