"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // During hydration, show a placeholder with same dimensions but no content
  // to avoid jumping, but keep it visible if needed for debugging.
  // Actually, let's just render the Sun icon by default to avoid invisibility.
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Sun className="h-5 w-5 text-muted-foreground/50" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full text-foreground"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-all text-slate-700 hover:text-slate-900" />
      ) : (
        <Sun className="h-5 w-5 transition-all text-amber-400 hover:text-amber-300" />
      )}
    </Button>
  );
}

export default ThemeToggle;
