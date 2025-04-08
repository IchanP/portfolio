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
            <div className="">
              <main className="flex w-full flex-row justify-center items-center">
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
