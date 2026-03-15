import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
    browser: {
      enabled: true,
      provider: playwright({
        launchOptions: {
          slowMo: 100,
        },
      }),
      // https://vitest.dev/config/browser/playwright
      instances: [{ browser: 'chromium' }],
      headless: false,
    },
    typecheck: { enabled: true },
    globals: true,
  },
});
