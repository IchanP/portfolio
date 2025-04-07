import { useTranslations } from "next-intl";
import NavItem from "./NavItem";
import MenuDiv from "../../ui/MenuDiv";
import ThemeSwitcher from "components/logic/ThemeSwitcher";
import LocaleToggleButton from "components/logic/LocaleToggle";
import CloseButton from "./CloseButton";

const NavItemFetcher = () => {
  const t = useTranslations("Navigation");

  const tNavItems = [
    { key: "home", href: "#home" },
    { key: "personal_projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <>
      <div className="md:hidden w-full">
        <CloseButton />
      </div>
      {tNavItems.map(({ key, href }) => (
        <MenuDiv key={key} hoverOnLarge={false}>
          <NavItem key={key + href} title={t(key)} href={href} />
        </MenuDiv>
      ))}
      <div className="w-full md:w-auto md:flex md:flex-row gap-5 md:mr-5">
        <MenuDiv hoverOnLarge={false}>
          <ThemeSwitcher />
        </MenuDiv>
        <MenuDiv hoverOnLarge={false}>
          <LocaleToggleButton />
        </MenuDiv>
      </div>
    </>
  );
};

export default NavItemFetcher;
