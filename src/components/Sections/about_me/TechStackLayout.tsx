const TechStackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {children}
    </div>
  );
};

export default TechStackLayout;
