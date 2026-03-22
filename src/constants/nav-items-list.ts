type NavItem = {
  href: string;
  label: string;
};

export const navItemsList = {
  code: { href: '#code', label: 'Code' },
  example: { href: '#example', label: 'Example' },
  useCase: { href: '#use-case', label: 'Use cases' },
  screenReaders: { href: '#screen-readers', label: 'Screen readers' },
  gotchas: { href: '#gotchas', label: 'Gotchas' },
  testing: { href: '#testing', label: 'Testing' },
} as const satisfies Record<string, NavItem>;

export type NavItemKey = keyof typeof navItemsList;
export type NavItemLabel = (typeof navItemsList)[NavItemKey]['label']; // NavItem['label'] doesn't have narrowed union type
