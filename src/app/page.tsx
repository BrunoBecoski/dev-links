import Link from "next/link";

import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="bg-desktop w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div className="w-lg mt-10 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <Avatar alt="brunobecoski" src="/avatar.png" />

          <span className="text-text text-md">@brunobecoski</span>
        </div>

        <div className="flex flex-col gap-4">
          <Button>Inscreva-se no NLW</Button>
          <Button>Baixe meu e-book</Button>
          <Button>Veja meu portfólio</Button>
          <Button>Conheça meu curso</Button>
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
