import Link from "next/link";

const ExternalLinkOpener = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </Link>
  );
};

export default ExternalLinkOpener;
