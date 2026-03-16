import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <main className="page-wrap px-4 py-12">
        <header>
          <h1>Home</h1>
        </header>
      </main>
    </>
  );
}
