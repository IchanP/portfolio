export const externalIcons: HrefIcons[] = [
  {
    href: "https://www.typescriptlang.org/",
    src: "/stack/ts-logo-128.svg",
    alt: "TypeScript",
  },
  {
    href: "https://en.wikipedia.org/wiki/CSS",
    src: "/stack/css.svg",
    alt: "CSS",
  },
  {
    href: "https://react.dev/",
    src: "/stack/react.svg",
    alt: "React",
  },
  {
    href: "https://tailwindcss.com/",
    src: "/stack/tailwind.svg",
    alt: "Tailwind",
  },
  {
    href: "https://www.docker.com/",
    src: "/stack/docker.svg",
    alt: "Docker",
  },
  {
    href: "https://kubernetes.io/",
    src: "/stack/kubernetes.svg",
    alt: "Kubernetes",
  },
  {
    href: "https://www.mysql.com/",
    src: "/stack/mysql.svg",
    alt: "MySQL",
  },
  // TODO add figma, node, mongodb
];

interface HrefIcons {
  href: string;
  src: string;
  alt: string;
}
