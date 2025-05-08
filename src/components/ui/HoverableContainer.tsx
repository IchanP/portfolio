const HoverableContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="shadow-lg hover:shadow-xl 
      rounded-xl hover:scale-105 ease-200 
      border border-zinc-400 h-full background
      item-bg dark:darkInteract dark:border-[#2F2424]
      flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
};

export default HoverableContainer;
