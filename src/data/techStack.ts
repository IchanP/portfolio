export const techStack: HrefIcon[] = [
  {
    href: "https://www.typescriptlang.org/",
    src: "/stack/ts-logo-128.svg",
    alt: "TypeScript",
  },
  {
    href: "https://nodejs.org/en",
    src: "/stack/node.svg",
    alt: "NodeJS",
  },
  {
    href: "https://react.dev/",
    src: "/stack/react.svg",
    alt: "React",
  },
  {
    href: "https://www.figma.com/",
    src: "/stack/figma.svg",
    alt: "Figma",
  },
  {
    href: "https://en.wikipedia.org/wiki/CSS",
    src: "/stack/css.svg",
    alt: "CSS",
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
  {
    href: "https://www.mongodb.com/",
    src: "/stack/mongodb.svg",
    alt: "MongoDB",
  },

  // TODO add figma, node, mongodb
];

export interface HrefIcon {
  href: string;
  src: string;
  alt: string;
}
