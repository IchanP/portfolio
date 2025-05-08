import { useMenu } from "context/MenuContext";
import NavItemFetcher from "./NavItemFetcher";
import NavLayout from "./NavLayout";
import ConditionalMenu from "./ConditionalMenu";

const NavMenu = () => {
  const { isMenuOpen } = useMenu();

  return (
    <NavLayout isMenuOpen={isMenuOpen}>
      <ConditionalMenu />
      <div className="flex-scol-mrow">
        <NavItemFetcher />
      </div>
    </NavLayout>
  );
};

export default NavMenu;
