const NavLayout = ({
  children,
  isMenuOpen,
}: {
  children: React.ReactNode;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`centered-flex flex-scol-mrow primary-bg absolute top-0 w-full 
        shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] animate-scrollInFromTop
         md:animate-none md:justify-end md:py-2 min-[3000px]:justify-center min-[3000px]:pl-[50%]
        ${isMenuOpen ? "md:flex" : "shide-mflex"}`}
    >
      {children}
    </div>
  );
};

export default NavLayout;
