import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonComponentProps = ComponentProps<'button'>;

export default function ButtonComponent({ children, className, ...props }: ButtonComponentProps) {
  return (
    <button
      className={twMerge(
        'border px-4 py-2 hover:text-red-500 hover:underline focus-visible:text-red-500 focus-visible:underline aria-pressed:bg-white aria-pressed:text-black',
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
