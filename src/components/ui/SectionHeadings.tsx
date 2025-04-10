const SectionHeadings = ({
  sectionHeader,
  subHeader,
}: {
  sectionHeader: string;
  subHeader: string;
}) => {
  return (
    <div className="flex flex-col centered-flex">
      <p className="font-ovo opacity-80">{subHeader}</p>
      <h2 className="header-text text-blueAccent">{sectionHeader}</h2>
    </div>
  );
};

export default SectionHeadings;
