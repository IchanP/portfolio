import { Link } from "i18n/routing";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  return (
    <>
      <Link
        className="font-bold w-full h-full flex items-center justify-center"
        href={href}
      >
        {title}
      </Link>
    </>
  );
};

export default NavItem;
