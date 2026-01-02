"use client";

import { useEffect, useState } from "react";


export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    }
  }, []);

  if (!mounted) return null; // avoids hydration mismatch

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      // className="px-3 py-2 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      className="px-3 py-2 border rounded text-sm text-muted hover:bg-gray-300 dark:hover:bg-gray-800"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
