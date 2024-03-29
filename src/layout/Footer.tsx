import { ContactForm } from "@/components/ContactForm";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from "@/components/Icons"; // Assuming you have an EmailIcon component
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-teal-600 p-8 text-zinc-100 dark:bg-teal-500 sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase text-tera-500 md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <div className="mb-6 flex flex-col items-center">
          <MailIcon className="mb-2 h-8 w-8 text-teal-300" />{" "}
          {/* Added EmailIcon component for styling */}
          <a
            href={`mailto:${siteMetadata.email}`}
            target="_blank"
            className="text-center text-lg font-bold underline sm:text-2xl lg:text-4xl"
          >
            kartiknc11@gmail.com
          </a>
        </div>
        <ContactForm />
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span>©2023 Kartik Chaudhari</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-teal-600 transition-colors duration-150 hover:text-tera-500 dark:text-teal-400 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
