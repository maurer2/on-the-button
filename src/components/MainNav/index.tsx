import { Link, type LinkProps } from '@tanstack/react-router';

const navLinks: (LinkProps & { label: string })[] = [
  {
    to: '/button-with-aria-pressed-attribute',
    label: 'Button with "aria-pressed"-attribute',
  },
  {
    to: '/plain-checkbox',
    label: 'Plain checkbox',
  },
  {
    to: '/button-with-aria-expanded-attribute',
    label: 'Button with "aria-expanded"-attribute',
  },
  {
    to: '/button-with-switch-role-and-aria-checked-attribute',
    label: 'Button with role="switch" and "aria-checked"-attribute',
  },
  {
    to: '/checkbox-with-switch-role',
    label: 'Checkbox with role="switch"',
    disabled: true,
  },
];

export default function MainNav() {
  return (
    <nav aria-label="Main nav">
      <ul className="my-4 flex list-none flex-wrap gap-4 px-0 text-center">
        {navLinks.map((link) => (
          <li key={link.to} className="contents">
            {/* https://www.joren.co/flex-grow-9999-hack/ */}
            <Link
              to={link.to}
              className="grow-9999 border px-4 py-2 text-secondary outline-offset-4 outline-black focus-visible:text-primary focus-visible:underline focus-visible:outline-solid [[href]]:hover:text-primary [[href]]:hover:underline [&:not([href])]:cursor-not-allowed [&:not([href])]:opacity-50 [&:not([href])]:hover:no-underline"
              activeProps={{
                className:
                  'bg-primary border-primary text-white [[href]]:hover:text-white focus-visible:text-white',
              }}
              disabled={link.disabled} // renders links without href and adds "aria-disabled"-attribute and role="link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
