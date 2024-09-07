import { useTranslations } from "next-intl";
import NavItem from "./NavItem";

const Nav = () => {
  const t = useTranslations("Navigation");
  const tNavItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
  ];
  return (
    <>
      {tNavItems.map(({ key, href }) => (
        <NavItem key={key} title={t(key)} href={href} />
      ))}
    </>
  );
};

export default Nav;
