import Link from "next/link";

import { Avatar } from "@/components/avatar";
import { ButtonLink } from "@/components/button-link";
import { SocialLink } from "@/components/social-link";
import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="bg-desktop w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="w-lg mt-10 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="brunobecoski" src="/avatar.png" />

          <span className="text-text text-md">@brunobecoski</span>
        </div>

        <ToggleTheme />

        <div className="flex flex-col gap-4">
          <ButtonLink href="/nlw">Inscreva-se no NLW</ButtonLink>
          <ButtonLink href="/ebook">Baixe meu e-book</ButtonLink>
          <ButtonLink href="/portifolio">Veja meu portfólio</ButtonLink>
          <ButtonLink href="/curso">Conheça meu curso</ButtonLink>
        </div>

        <div className="flex justify-center gap-4 my-6">
          <SocialLink href="/github" icon="github" />
          <SocialLink href="/instagram" icon="instagram" />
          <SocialLink href="/youtube" icon="youtube" />
          <SocialLink href="/linkedin" icon="linkedin" />
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
