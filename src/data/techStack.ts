export const externalIcons: ExternalIconLink[] = [
  {
    href: "https://google.com",
    src: {
      darkmode: "/github-mark.svg",
      lightmode: "/github-mark.svg",
    },
    alt: "TypeScript",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/github-mark.svg",
      lightmode: "/github-mark.svg",
    },
    alt: "JavaScript",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/github-mark.svg",
      lightmode: "/github-mark.svg",
    },
    alt: "Github",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/github-mark.svg",
      lightmode: "/github-mark.svg",
    },
    alt: "Visual Studio",
  },
];

interface ExternalIconLink {
  href: string;
  src: {
    darkmode: string;
    lightmode: string;
  };
  alt: string;
}
