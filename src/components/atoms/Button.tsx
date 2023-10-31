type Props = {
  className: string;
  children: React.ReactNode | string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
