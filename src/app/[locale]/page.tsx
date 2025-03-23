import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  const tn = useTranslations("Name");
  return (
    <div className="grid grid-rows-[1fr_0.5fr] pt-5 gap-5 ml-5 mr-5 md:grid-rows-0 md:grid-cols-2 md:ml-20">
      <div>
        <h1 className="text-4xl">Hi, I'm {tn("my_name")}!</h1>
        <p></p>
      </div>
    </div>
  );
}
