const NavLayout = ({
  children,
  isMenuOpen,
}: {
  children: React.ReactNode;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`centered-flex primary-bg absolute top-0 w-full 
        shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] animate-scrollInFromTop
         md:animate-none md:justify-end md:py-2 
        ${isMenuOpen ? "md:flex" : "shide-mflex"}`}
    >
      {children}
    </div>
  );
};

export default NavLayout;
