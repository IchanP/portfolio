const HoverableContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="shadow-lg hover:shadow-xl 
      rounded-xl hover:scale-105 ease-200 
      border border-zinc-400 h-full"
    >
      {children}
    </div>
  );
};

export default HoverableContainer;
