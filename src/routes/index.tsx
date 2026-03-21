import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <main className="mx-auto px-4 inline-[min(100%,100ch)]">
        <header>
          <h1>Home</h1>
        </header>
      </main>
    </>
  );
}
