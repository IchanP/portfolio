const SectionGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="adaptive-two-grid gap-12 md:gap-0 col-span-2 2k-wide:mb-[45%] py-24 md:py-0 md:pt-[8%]">
      {children}
    </div>
  );
};

export default SectionGrid;
