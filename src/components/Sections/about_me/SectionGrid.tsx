const SectionGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="adaptive-two-grid md:gap-y-20 gap-y-12 col-span-2 py-24 2xl:max-w-[90%] mx-auto">
      {children}
    </div>
  );
};

export default SectionGrid;
