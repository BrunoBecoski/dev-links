import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <Link href={href} target="_blank">
      <button
        type="button"
        className="bg-surface text-text text-md border border-stroke rounded-lg py-4 hover:cursor-pointer hover:bg-surface-hover hover:border-text transition-colors duration-300 w-full"
      >
        {children}
      </button>
    </Link>
  );
}
