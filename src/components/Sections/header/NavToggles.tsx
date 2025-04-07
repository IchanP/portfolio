import MenuDiv from "../../ui/MenuDiv";
import ThemeSwitcher from "components/logic/ThemeSwitcher";
import LocaleToggleButton from "components/logic/LocaleToggle";

const NavToggles = () => {
  return (
    <div className="w-full md:w-auto md:flex md:flex-row gap-5 md:mr-5">
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
