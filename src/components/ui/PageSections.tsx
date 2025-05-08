const PageSections = ({
  children,
  alternateColor,
  id,
}: {
  children: React.ReactNode;
  alternateColor: boolean;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={`w-full flex items-center justify-center ${alternateColor ? "primary-bg" : "background"}`}
    >
      <div className="grid grid-cols-1 w-[80%] 2k-wide:max-w-[50%] md:grid-cols-2 h-full">
        {children}
      </div>
    </div>
  );
};

export default PageSections;
