import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid grid-rows-[1fr_0.5fr] pt-5 gap-5 ml-5 mr-5 md:grid-rows-0 md:grid-cols-2 md:ml-20">
      <div>
        <h1 className="text-3xl text-center font-courier-prime">
          {t("About")}
        </h1>
        <p className="mt-5">{t("about_message_one")}</p>
        <p className="mt-2">{t("about_message_two")}</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Image
          alt="My logo"
          src="/fuckingweebkita.gif"
          width={500}
          height={200}
        />
        <h2 className="text-2xl mt-4">Test</h2>
      </div>
    </div>
  );
}
