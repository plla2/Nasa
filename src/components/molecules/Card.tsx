type CardProps = {
  className: string;
  children: React.ReactNode;
};

const Card = ({ className, children, ...rest }: CardProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Card;
