import localFont from "next/font/local";
import "../globals.css";
import { TopLevelProviders } from "../providers";
import Header from "../../components/Sections/header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "components/Sections/footer/Footer";
import { Metadata } from "next/types";
import { locales } from "i18n/locales";

const ovoRegular = localFont({
  src: "../fonts/Ovo-Regular.ttf",
  variable: "--font-ovo",
  weight: "400",
});

const outfit = localFont({
  src: "../fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
});

export async function generateMetadata(): Promise<Metadata> {
  const title = "Pontus Grandin | Portfolio";
  const description =
    "Pontus Grandin is a web developer with experience in building modern web applications. Explore his portfolio to see his work and projects.";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const currentUrl = `${baseUrl}/en`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: locales.reduce(
        (acc, l) => {
          acc[l] = `${baseUrl}/${l}`;
          return acc;
        },
        {} as Record<string, string>,
      ),
    },
    robots: {
      index: true,
      follow: true,
      nosnippet: false,
      "max-image-preview": "large",
    },
  };
}

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
      <head>
        {locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/${l}`}
          />
        ))}
      </head>
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
            <footer className="bottom-0 w-full py-2 ">
              <Footer />
            </footer>
          </NextIntlClientProvider>
        </TopLevelProviders>
      </body>
    </html>
  );
}
