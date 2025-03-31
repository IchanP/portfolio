import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Providers } from "../providers";
import Header from "../../components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "components/Footer";
import { Roboto } from "next/font/google";
import Script from "next/script";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "500",
});

const lexendExtraBold = localFont({
  src: "../fonts/Lexend-Bold.ttf",
  variable: "--font-lexend",
  weight: "100, 900",
});

const courierPrime = localFont({
  src: "../fonts/CourierPrime-BoldItalic.ttf",
  variable: "--font-courier",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pontus Grandin | Fullstack JavaScript Developer",
  description: "Portfolio for the JavaScript Developer Pontus Grandin",
};

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
        className={`${geistSans.variable} ${roboto.variable} ${lexendExtraBold.variable} ${geistMono.variable} ${courierPrime.variable} flex flex-col min-h-screen antialiased bg-lightbg text-black dark:bg-darkbg dark:text-white`}
      >
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
