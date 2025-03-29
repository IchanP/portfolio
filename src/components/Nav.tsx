import { useTranslations } from "next-intl";
import NavItem from "./NavItem";
import MenuDiv from "./ui/MenuDiv";

const Nav = () => {
  const t = useTranslations("Navigation");

  const tNavItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "personal_projects", href: "#projects" },
  ];

  return (
    <>
      {tNavItems.map(({ key, href }) => (
        <MenuDiv key={key} hoverOnLarge={false}>
          <NavItem key={key + href} title={t(key)} href={href} />
        </MenuDiv>
      ))}
    </>
  );
};

export default Nav;
