import localFont from "next/font/local";
import "../globals.css";
import { TopLevelProviders } from "../providers";
import Header from "../../components/Sections/header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "components/Sections/footer/Footer";

const ovoRegular = localFont({
  src: "../fonts/Ovo-Regular.ttf",
  variable: "--font-ovo",
  weight: "400",
});

const outfit = localFont({
  src: "../fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${ovoRegular.variable} ${outfit.variable} flex flex-col min-h-screen antialiased bg-lightbg text-black dark:bg-darkbg dark:text-white`}
      >
        <TopLevelProviders>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <div className="flex-grow grid grid-rows-[1px_1fr_1px] p-4 pt-8 sm:p-8 sm:pt-0 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
              <main className="flex w-full flex-row justify-center gap-4 sm:gap-8 row-start-2 items-center sm:items-start">
                {children}
              </main>
            </div>
            <footer className="bottom-0 w-full py-2 bg-lightPrimary dark:bg-darkPrimary">
              <Footer />
            </footer>
          </NextIntlClientProvider>
        </TopLevelProviders>
      </body>
    </html>
  );
}
