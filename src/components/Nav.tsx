import { useTranslations } from "next-intl";
import NavItem from "./NavItem";
import MenuDiv from "./ui/MenuDiv";

const Nav = () => {
  const t = useTranslations("Navigation");
  const tNavItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "personal_projects", href: "/projects" },
    { key: "school_projects", href: "/coursework" },
  ];
  return (
    <>
      {tNavItems.map(({ key, href }) => (
        <MenuDiv hoverOnLarge={true}>
          <NavItem key={key} title={t(key)} href={href} />
        </MenuDiv>
      ))}
    </>
  );
};

export default Nav;
