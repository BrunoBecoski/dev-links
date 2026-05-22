interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="bg-surface text-text text-md border border-stroke rounded-lg py-4 hover:cursor-pointer hover:bg-surface-hover hover:border-text transition-colors duration-300"
    >
      {children}
    </button>
  );
}
