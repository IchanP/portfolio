import { ProjectInfo } from "data/projects";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ParagraphText from "components/ui/ParagraphText";
import Button from "@mui/material/Button";
import { SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import BlackOverlayBoxImage from "./BlackOverlayBoxImage";
import Link from "next/link";

const ProjectCard = ({ project }: { project: ProjectInfo }) => {
  return (
    <Card sx={{ maxWidth: 311 }}>
      <BlackOverlayBoxImage imgAlt={project.imgAlt} imgSrc={project.imgSrc} />
      <CardContent className="flex flex-col gap-3">
        <h3 className="text-blueAccent text-xl font-outfit">{project.title}</h3>
        <ParagraphText>{project.summary}</ParagraphText>
      </CardContent>
      <CardActions>
        {project.figmaUrl && (
          <ButtonLink href={project.figmaUrl}>
            <FigmaIcon />
            Figma
          </ButtonLink>
        )}
        <ButtonLink href={project.githubUrl}>
          <GitHubIcon />
          Github
        </ButtonLink>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

function ButtonLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} target="_blank">
      <Button size="medium" className="flex flex-row gap-2">
        {children}
      </Button>
    </Link>
  );
}

function FigmaIcon() {
  return (
    <SvgIcon viewBox="0 0 16 16" fill="none">
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4027_96)">
          <path
            d="M7.99992 1.33337H5.66659C5.04775 1.33337 4.45425 1.57921 4.01667 2.01679C3.57908 2.45438 3.33325 3.04787 3.33325 3.66671C3.33325 4.28555 3.57908 4.87904 4.01667 5.31662C4.45425 5.75421 5.04775 6.00004 5.66659 6.00004M7.99992 1.33337V6.00004M7.99992 1.33337H10.3333C10.6397 1.33337 10.9431 1.39373 11.2262 1.51099C11.5093 1.62825 11.7665 1.80012 11.9832 2.01679C12.1998 2.23346 12.3717 2.49069 12.489 2.77378C12.6062 3.05687 12.6666 3.36029 12.6666 3.66671C12.6666 3.97312 12.6062 4.27654 12.489 4.55964C12.3717 4.84273 12.1998 5.09995 11.9832 5.31662C11.7665 5.53329 11.5093 5.70517 11.2262 5.82243C10.9431 5.93969 10.6397 6.00004 10.3333 6.00004M7.99992 6.00004H5.66659M7.99992 6.00004H10.3333M7.99992 6.00004V10.6667M5.66659 6.00004C5.04775 6.00004 4.45425 6.24587 4.01667 6.68346C3.57908 7.12104 3.33325 7.71454 3.33325 8.33337C3.33325 8.95221 3.57908 9.5457 4.01667 9.98329C4.45425 10.4209 5.04775 10.6667 5.66659 10.6667M10.3333 6.00004C10.0268 6.00004 9.72342 6.06039 9.44032 6.17765C9.15723 6.29492 8.90001 6.46679 8.68334 6.68346C8.46667 6.90013 8.29479 7.15735 8.17753 7.44045C8.06027 7.72354 7.99992 8.02696 7.99992 8.33337C7.99992 8.63979 8.06027 8.94321 8.17753 9.2263C8.29479 9.50939 8.46667 9.76662 8.68334 9.98329C8.90001 10.2 9.15723 10.3718 9.44032 10.4891C9.72342 10.6064 10.0268 10.6667 10.3333 10.6667C10.6397 10.6667 10.9431 10.6064 11.2262 10.4891C11.5093 10.3718 11.7665 10.2 11.9832 9.98329C12.1998 9.76662 12.3717 9.50939 12.489 9.2263C12.6062 8.94321 12.6666 8.63979 12.6666 8.33337C12.6666 8.02696 12.6062 7.72354 12.489 7.44045C12.3717 7.15735 12.1998 6.90013 11.9832 6.68346C11.7665 6.46679 11.5093 6.29492 11.2262 6.17765C10.9431 6.06039 10.6397 6.00004 10.3333 6.00004ZM5.66659 10.6667C5.04775 10.6667 4.45425 10.9125 4.01667 11.3501C3.57908 11.7877 3.33325 12.3812 3.33325 13C3.33325 13.6189 3.57908 14.2124 4.01667 14.65C4.45425 15.0875 5.04775 15.3334 5.66659 15.3334C6.28542 15.3334 6.87892 15.0875 7.3165 14.65C7.75409 14.2124 7.99992 13.6189 7.99992 13V10.6667M5.66659 10.6667H7.99992"
            stroke="#0288D1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
