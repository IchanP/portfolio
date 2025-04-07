const NavLayout = ({
  children,
  isMenuOpen,
}: {
  children: React.ReactNode;
  isMenuOpen: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-lightPrimary
          absolute top-0 w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]
          animate-scrollInFromTop md:animate-none md:flex-row md:w-full
          md:items-end md:justify-end md:py-2 md:items-center
          ${isMenuOpen ? "md:flex" : "hidden md:flex"}`}
    >
      {children}
    </div>
  );
};

export default NavLayout;
