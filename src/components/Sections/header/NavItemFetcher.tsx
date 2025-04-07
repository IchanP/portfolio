import { useTranslations } from "next-intl";
import NavItem from "./NavItem";
import MenuDiv from "../../ui/MenuDiv";
import NavToggles from "./NavToggles";

const NavItemFetcher = () => {
  const t = useTranslations("Navigation");

  const tNavItems = [
    { key: "home", href: "#home" },
    { key: "personal_projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <>
      {tNavItems.map(({ key, href }) => (
        <MenuDiv key={key}>
          <NavItem key={key + href} title={t(key)} href={href} />
        </MenuDiv>
      ))}
      <NavToggles />
    </>
  );
};

export default NavItemFetcher;
