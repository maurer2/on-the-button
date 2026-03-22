import { useId, type ComponentProps } from 'react';

type ButtonComponentProps = Omit<ComponentProps<'input'>, 'type' | 'className'> & {
  label: string;
};

export default function CheckboxComponent({
  label,
  name,
  checked,
  children,
  ...props
}: ButtonComponentProps) {
  const id = useId();

  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        className="accent-primary"
        {...props}
      />
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}
