const SquareBlurb = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-grow dark:bg-darkPrimary w-1/4 bg-lightPrimary p-4 rounded-md hover:bg-lightHover dark:hover:bg-darkHover">
      {children}
    </div>
  );
};

export default SquareBlurb;
