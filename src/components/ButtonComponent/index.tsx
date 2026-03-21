import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonComponentProps = ComponentProps<'button'>;

export default function ButtonComponent({ children, className, ...props }: ButtonComponentProps) {
  return (
    <button
      className={twMerge(
        'border px-4 py-2 hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline aria-pressed:bg-primary aria-pressed:text-white cursor-pointer',
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
