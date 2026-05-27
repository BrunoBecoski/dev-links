"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const icons: Record<Theme, React.JSX.Element> = {
  light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 256 256"
    >
      <title>Dark</title>
      <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
    </svg>
  ),
  dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 256 256"
    >
      <title>Light</title>
      <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
    </svg>
  ),
};

export function ToggleTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(
    () => setTheme(document.documentElement.dataset.theme as Theme),
    [],
  );

  function handleChangeTheme() {
    switch (theme) {
      case "dark":
        setTheme("light");
        document.documentElement.dataset.theme = "light";
        localStorage.setItem("devlinks:theme", "light");
        break;

      case "light":
        setTheme("dark");
        document.documentElement.dataset.theme = "dark";
        localStorage.setItem("devlinks:theme", "dark");
        break;

      default:
        setTheme("dark");
        document.documentElement.dataset.theme = "dark";
        localStorage.setItem("devlinks:theme", "dark");
        break;
    }
  }

  return (
    <div className="flex items-center justify-center w-16 h-6 bg-surface rounded-full border border-stroke">
      <button
        type="button"
        onClick={handleChangeTheme}
        className={`transition-transform duration-300
          ${theme === "dark" ? "-translate-x-4" : "translate-x-4"}
        `}
      >
        <div className="border-8 border-transparent rounded-full hover:border-highlight hover:cursor-pointer transition-colors duration-300">
          <div
            className={`size-8 rounded-full flex items-center justify-center transition-colors duration-300
              ${theme === "dark" ? "bg-white fill-black" : "bg-black  fill-white"}
            `}
          >
            {icons[theme]}
          </div>
        </div>
      </button>
    </div>
  );
}
