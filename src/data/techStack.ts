export const externalIcons: ExternalIconLink[] = [
  {
    href: "https://www.typescriptlang.org/",
    src: {
      darkmode: "/stack/ts-logo-128.svg",
      lightmode: "/stack/ts-logo-128.svg",
    },
    alt: "TypeScript",
  },
  {
    href: "https://en.wikipedia.org/wiki/CSS",
    src: {
      darkmode: "/stack/css.svg",
      lightmode: "/stack/css.svg",
    },
    alt: "CSS",
  },
  {
    href: "https://react.dev/",
    src: {
      darkmode: "/stack/react.svg",
      lightmode: "/stack/react.svg",
    },
    alt: "React",
  },
  {
    href: "https://tailwindcss.com/",
    src: {
      darkmode: "/stack/tailwind.svg",
      lightmode: "/stack/tailwind.svg",
    },
    alt: "Tailwind",
  },
  {
    href: "https://www.docker.com/",
    src: {
      darkmode: "/stack/docker.svg",
      lightmode: "/stack/docker.svg",
    },
    alt: "Docker",
  },
  {
    href: "https://kubernetes.io/",
    src: {
      darkmode: "/stack/kubernetes.svg",
      lightmode: "/stack/kubernetes.svg",
    },
    alt: "Kubernetes",
  },
  {
    href: "https://www.mysql.com/",
    src: {
      darkmode: "/stack/mysql.svg",
      lightmode: "/stack/mysql.svg",
    },
    alt: "MySQL",
  },
];

export const jsStack: ExternalIconLink = {
  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  src: {
    lightmode: "/stack/js_logo.svg",
    darkmode: "/stack/js_logo_darkmode.svg",
  },
  alt: "JavaScript",
};

export interface ExternalIconLink {
  href: string;
  src: {
    darkmode: string;
    lightmode: string;
  };
  alt: string;
}
