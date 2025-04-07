import { useMenu } from "context/MenuContext";
import HamburgerMenu from "./HamburgerMenu";

const MobileMenuToggle = () => {
  const { isMenuOpen, handleMenuState } = useMenu();
  return (
    <>
      {!isMenuOpen && (
        <div className="md:hidden">
          <HamburgerMenu callback={handleMenuState} />
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
