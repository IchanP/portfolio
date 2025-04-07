import { Link } from "i18n/routing";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  return (
    <>
      <Link
        className="w-full h-full font-ovo flex items-center text-lg justify-center px-5"
        href={href}
      >
        {title}
      </Link>
    </>
  );
};

export default NavItem;
