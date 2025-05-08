import { useMenu } from "context/MenuContext";
import NavItemFetcher from "./NavItemFetcher";
import NavLayout from "./NavLayout";
import ConditionalMenu from "./ConditionalMenu";

const NavMenu = () => {
  const { isMenuOpen } = useMenu();

  return (
    <NavLayout isMenuOpen={isMenuOpen}>
      <ConditionalMenu />
      <NavItemFetcher />
    </NavLayout>
  );
};

export default NavMenu;
