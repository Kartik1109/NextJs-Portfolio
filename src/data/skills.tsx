import Image from "next/image";
import { SiExpress, SiSocketdotio, SiFlask } from "react-icons/si";
import { GithubIcon, ReactRouterDomIcon } from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "Python",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/python.svg" fill />
      </span>
    ),
  },
  {
    name: "Java",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/java.svg" fill />
      </span>
    ),
  },
  {
    name: "SQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/python.svg" fill />
      </span>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="javascript logo" src="/icons/javascript.svg" fill />
      </span>
    ),
  },
  {
    name: "Typescript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="typescript logo" src="/icons/typescript.svg" fill />
      </span>
    ),
  },
  {
    name: "Matlab",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/matlab.svg" fill />
      </span>
    ),
  },
  {
    name: "GO",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/go.svg" fill />
      </span>
    ),
  },
  {
    name: "HTML",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="html logo" src="/icons/html.svg" fill />
      </span>
    ),
  },
  {
    name: "CSS",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="css logo" src="/icons/css.svg" fill />
      </span>
    ),
  },
  {
    name: "SASS",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="sass logo" src="/icons/sass.svg" fill />
      </span>
    ),
  },
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "Reactjs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />
      </span>
    ),
  },
  {
    name: "Vuejs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/vue.svg" fill />
      </span>
    ),
  },
  {
    name: "Fast API",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/fastapi.svg" fill />
      </span>
    ),
  },

  {
    name: "React-router-dom",
    icon: <ReactRouterDomIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Redux",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="redux logo" src="/icons/redux.svg" fill />
      </span>
    ),
  },
  {
    name: "Tailwindcss",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="tailwindcss logo" src="/icons/tailwindcss.svg" fill />
      </span>
    ),
  },
  {
    name: "TensorFlow",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="tailwindcss logo" src="/icons/tensor.svg" fill />
      </span>
    ),
  },
];

export const BACKEND_PILL: SkillPillProps[] = [
  {
    name: "Nodejs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="nodejs logo" src="/icons/nodejs.svg" fill />
      </span>
    ),
  },
  {
    name: "Express",
    icon: <SiExpress className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Flask",
    icon: <SiFlask className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "MongoDB",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mongodb logo" src="/icons/mongodb.svg" fill />
      </span>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postgresql logo" src="/icons/postgresql.svg" fill />
      </span>
    ),
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Git",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="git logo" src="/icons/git.svg" fill />
      </span>
    ),
  },
  {
    name: "Amazon Web Services",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/aws.svg" fill />
      </span>
    ),
  },
  {
    name: "Github",
    icon: <GithubIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Docker",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="docker logo" src="/icons/docker.svg" fill />
      </span>
    ),
  },
  {
    name: "Postman",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/postman.svg" fill />
      </span>
    ),
  },
  {
    name: "Redis",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/redis.svg" fill />
      </span>
    ),
  },
  {
    name: "Elastic Search",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/elastic.svg" fill />
      </span>
    ),
  },
  {
    name: "Vscode",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="vscode logo" src="/icons/vscode.svg" fill />
      </span>
    ),
  },
];
