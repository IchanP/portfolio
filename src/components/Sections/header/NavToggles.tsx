import MenuDiv from "../../ui/MenuDiv";
import ThemeSwitcher from "components/logic/ThemeSwitcher";
import LocaleToggleButton from "components/logic/LocaleToggle";

const NavToggles = () => {
  return (
    <div className="md-row md:w-auto gap-5 md:mr-5">
      <MenuDiv>
        <ThemeSwitcher />
      </MenuDiv>
      <MenuDiv>
        <LocaleToggleButton />
      </MenuDiv>
    </div>
  );
};

export default NavToggles;
