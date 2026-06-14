const AuthSimpleLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <div className="min-h-dvh w-dvw flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthSimpleLayout;
