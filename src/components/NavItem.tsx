import { Link } from "i18n/routing";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  return (
    <>
      <Link
        className="w-full h-full font-roboto flex items-center justify-center px-5"
        href={href}
      >
        {title}
      </Link>
    </>
  );
};

export default NavItem;
