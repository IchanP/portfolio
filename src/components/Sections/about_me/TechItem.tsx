import HoverableContainer from "components/ui/HoverableContainer";
import { HrefIcon } from "data/techStack";
import Image from "next/image";
import Link from "next/link";

const TechItem = ({ iconInfo }: { iconInfo: HrefIcon }) => {
  return (
    <div className="w-1/4 lg:w-2/12 xl:w-1/12 cursor-pointer">
      <Link href={iconInfo.href} target="_blank">
        <HoverableContainer>
          <div className="pt-5 px-5 h-full relative flex flex-col items-center">
            <div className="h-[60] pb-2">
              <Image
                width={50}
                height={75}
                src={iconInfo.src}
                alt={iconInfo.alt}
              />
            </div>
            <p className="text-sm font-outfit text-center mt-auto pb-1 px-6 xl:px-0">
              {iconInfo.alt}
            </p>
          </div>
        </HoverableContainer>
      </Link>
    </div>
  );
};

export default TechItem;
