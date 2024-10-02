const SquareBlurb = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden w-full dark:bg-darkPrimary p-2 rounded-md bg-lightPrimary hover:bg-lightHover dark:hover:bg-darkHover lg:w-3/4 xl:w-5/12 2xl:w-1/3">
      {children}
    </div>
  );
};

export default SquareBlurb;
