const ProjectSectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="centered-flex flex-col gap-16 col-span-2 py-24">
      {children}
    </div>
  );
};

export default ProjectSectionLayout;
