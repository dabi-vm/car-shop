import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { useTheme } from "@/components/theme-provider"

export function AppBar() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header className="z-10 shrink-0 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Typography variant="h3">Car shop</Typography>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </header>
  )
}
