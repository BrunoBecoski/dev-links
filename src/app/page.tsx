import { Avatar } from "@/components/avatar";

export default function Home() {
  return (
    <main className="bg-desktop w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center">
      <div>
        <Avatar alt="brunobecoski" src="/avatar.png" />
      </div>
    </main>
  );
}
