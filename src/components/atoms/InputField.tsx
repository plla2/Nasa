type InputFieldProps = {
  className: string;
  children: React.ReactNode;
};

const InputField = ({ className, children, ...rest }: InputFieldProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default InputField;
