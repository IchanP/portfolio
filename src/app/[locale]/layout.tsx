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
      <body className={`${ovoRegular.variable} ${outfit.variable} `}>
        <TopLevelProviders>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <div>
              <main>{children}</main>
            </div>
            <footer className="w-full py-2 background">
              <Footer />
            </footer>
          </NextIntlClientProvider>
        </TopLevelProviders>
      </body>
    </html>
  );
}
