import { useTranslations } from "next-intl";
import HamburgerMenu from "./HamburgerButton";
import { useMenu } from "context/MenuContext";
import NavItemFetcher from "./NavItemFetcher";

const Navigation = () => {
  const t = useTranslations("Name");
  const { isMenuOpen, handleMenuState } = useMenu();

  return (
    <>
      {!isMenuOpen && (
        <div className="md:hidden">
          <HamburgerMenu callback={handleMenuState} />
        </div>
      )}
      <div
        className={`flex flex-col items-center justify-center bg-lightPrimary 
          absolute top-0 w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]
          animate-scrollInFromTop md:animate-none md:flex-row md:w-full
          md:items-end md:justify-end md:py-2 md:items-center
          ${isMenuOpen ? "md:flex" : "hidden md:flex"}
          `}
      >
        <div className="hidden md:flex md:flex-row absolute left-48">
          <h1 className="font-ovo text-3xl">{t("my_name")}</h1>
        </div>
        <NavItemFetcher />
      </div>
    </>
  );
};

export default Navigation;
