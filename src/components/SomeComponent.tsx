type Props = {
  children: React.ReactNode;
};
export const SomeComponent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SomeComponent;
