export const HomeContainer = ({ children }: containerBaseProps) => {
  return (
    <div className="relative z-0 bg-blue-500">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {children}
      </div>
    </div>
  );
};
