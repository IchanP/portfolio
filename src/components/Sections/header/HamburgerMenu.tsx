import Image from "next/image";

const HamburgerMenu = ({ callback }: { callback: () => void }) => {
  return (
    <>
      <button
        className="fixed bg-[#474444] px-4 top-5 right-7 rounded-[13px] flex flex-row gap-2 items-center justify-center text-white"
        onClick={callback}
      >
        <p>Menu</p>
        <Image
          width={40}
          height={30}
          className="brightness-0 invert dark"
          src="/hamburger.svg"
          alt="Three white vertical lines representing a hamburger."
        />
      </button>
    </>
  );
};
export default HamburgerMenu;
