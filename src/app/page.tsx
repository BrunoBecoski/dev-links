import Link from "next/link";
import matter from "gray-matter";
import path from "node:path";
import fs from "node:fs";

import { Avatar } from "@/components/avatar";
import { ButtonLink } from "@/components/button-link";
import { SocialLink, SocialMedia } from "@/components/social-link";
import { ToggleTheme } from "@/components/toggle-theme";

type Content = {
  avatar: string;
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
    <main className="bg-desktop w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="w-lg mt-10 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="brunobecoski" src={content.avatar} />

          <span className="text-text text-md">@brunobecoski</span>
        </div>

        <div className="flex justify-center mt-">
          <ToggleTheme />
        </div>

        <div className="flex flex-col gap-4">
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
