import Link from "next/link";
import matter from "gray-matter";
import path from "node:path";
import fs from "node:fs";

import { Avatar } from "@/components/avatar";
import { ButtonLink } from "@/components/button-link";
import { SocialLink, type SocialMedia } from "@/components/social-link";
import { ToggleTheme } from "@/components/toggle-theme";

type Content = {
  avatar: string;
  name: string;
  links: {
    title: string;
    url: string;
  }[];
  socials: {
    name: SocialMedia;
    url: string;
  }[];
};

function getContent(): Content {
  const filePath = path.join(process.cwd(), "src/app", "content.md");

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data } = matter(fileContent);

  return data as Content;
}

export default function Home() {
  const content = getContent();

  return (
    <main className="bg-mobile md:bg-desktop w-full  h-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="w-full md:w-lg my-10 px-6 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <Avatar alt={content.name} src={content.avatar} />

          <span className="text-text text-md mt-2">{content.name}</span>
        </div>

        <div className="flex justify-center">
          <ToggleTheme />
        </div>

        <div className="flex flex-col gap-4 w-full">
          {content.links.map((link) => (
            <ButtonLink key={link.url} href={link.url}>
              {link.title}
            </ButtonLink>
          ))}
        </div>

        <div className="flex justify-center gap-4 my-6">
          {content.socials.map((social) => (
            <SocialLink key={social.url} href={social.url} icon={social.name} />
          ))}
        </div>

        <span className="text-sm text-text text-center">
          Feito com ♥ pela{" "}
          <Link
            href="https://www.rocketseat.com.br"
            target="_blank"
            className="underline hover:animate-pulse"
          >
            Rocketseat
          </Link>
        </span>
      </div>
    </main>
  );
}
