const ParagraphText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 items-center opacity-85">
      {children}
    </div>
  );
};

export default ParagraphText;
