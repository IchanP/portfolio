const SectionGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="adaptive-two-grid gap-12 md:gap-y-20 col-span-2 py-24">
      {children}
    </div>
  );
};

export default SectionGrid;
