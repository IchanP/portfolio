export const externalIcons: ExternalIconLink[] = [
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/ts-logo-128.svg",
      lightmode: "/stack/ts-logo-128.svg",
    },
    alt: "TypeScript",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/mysql.svg",
      lightmode: "/stack/mysql.svg",
    },
    alt: "MySQL",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/css.svg",
      lightmode: "/stack/css.svg",
    },
    alt: "CSS",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/docker.svg",
      lightmode: "/stack/docker.svg",
    },
    alt: "Docker",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/kubernetes.svg",
      lightmode: "/stack/kubernetes.svg",
    },
    alt: "Kubernetes",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/react.svg",
      lightmode: "/stack/react.svg",
    },
    alt: "React",
  },
  {
    href: "https://google.com",
    src: {
      darkmode: "/stack/tailwind.svg",
      lightmode: "/stack/tailwind.svg",
    },
    alt: "Tailwind",
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
