const JustifiedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 items-center text-justify">
      {children}
    </div>
  );
};

export default JustifiedText;
