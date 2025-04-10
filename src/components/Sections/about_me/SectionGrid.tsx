const SectionGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="adaptive-two-grid gap-28 md:gap-0 col-span-2 mt-[45%] md:mt-[8%]">
      {children}
    </div>
  );
};

export default SectionGrid;
