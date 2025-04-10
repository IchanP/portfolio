const PageSections = ({
  children,
  alternateColor,
}: {
  children: React.ReactNode;
  alternateColor: boolean;
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center ${alternateColor ? " bg-lightPrimary" : ""}`}
    >
      <div className="grid grid-cols-1 max-w-6xl md:grid-cols-2 h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageSections;
