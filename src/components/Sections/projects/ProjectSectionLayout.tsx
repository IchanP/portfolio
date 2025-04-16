const ProjectSectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="centered-flex flex-col gap-16 page-section">{children}</div>
  );
};

export default ProjectSectionLayout;
