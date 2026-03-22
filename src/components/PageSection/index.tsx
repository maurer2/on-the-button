import type { ReactNode } from 'react';

// export prop type required as ComponentProps helper does not work with generics
export type PageSectionProps<T extends string> = {
  // title: T | (string & {}); // preset values but allow arbitrary strings as well
  title: T;
  id?: string;
  children?: ReactNode;
};

export default function PageSection<T extends string>({
  title,
  id,
  children,
}: PageSectionProps<T>) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  );
}
