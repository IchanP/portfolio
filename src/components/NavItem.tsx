import { Link } from "i18n/routing";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  return (
    <>
      <Link href={href}>{title}</Link>
    </>
  );
};

export default NavItem;
