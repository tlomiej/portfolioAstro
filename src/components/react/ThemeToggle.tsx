import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const initialTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") ?? "light" : "light";
    const [theme, setTheme] = useState(initialTheme);
  

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}</button>
  );
}
