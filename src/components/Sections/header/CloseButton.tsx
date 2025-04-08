"use client";
import MenuDiv from "components/ui/MenuDiv";
import { useMenu } from "context/MenuContext";
import Image from "next/image";

const CloseButton = () => {
  const { handleMenuState } = useMenu();

  return (
    <MenuDiv>
      <div className="flex w-full flex-row items-end justify-end">
        <button onClick={handleMenuState} className="px-2 mr-2">
          <Image
            src="/close-menu.svg"
            width={25}
            height={25}
            alt="The symbol X"
          />
        </button>
      </div>
    </MenuDiv>
  );
};

export default CloseButton;
