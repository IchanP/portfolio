import LocaleToggleButton from "./LocaleToggle";
import MenuDiv from "./MenuDiv";
import Nav from "./Nav";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between pt-5 pb-1">
      <div className="flex-grow flex-col items-center flex justify-center md:gap-3">
        <Nav />
      </div>
      <div className="w-full flex flex-col md:w-auto md:pl-3 md:flex-row md:gap-5">
        <MenuDiv>
          <ThemeSwitcher />
        </MenuDiv>
        <MenuDiv>
          <LocaleToggleButton />
        </MenuDiv>
      </div>
    </header>
  );
};

export default Header;
