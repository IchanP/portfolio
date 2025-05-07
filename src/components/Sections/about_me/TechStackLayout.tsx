const TechStackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 placeholder:items-center md:items-start md:pl-24 2k-wide:pl-20">
      {children}
    </div>
  );
};

export default TechStackLayout;
