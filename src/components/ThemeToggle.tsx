import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { CgDarkMode } from "react-icons/cg"

interface Props {
  theme: string
  toggleTheme: (theme: string) => string
}

const ThemeToggle: React.FC<Props> = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: Props) => (
        <label>
          <input
            type="checkbox"
            className="hidden"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <div className="p-4">
            <CgDarkMode className="w-7 h-7 hover:text-yellow-500" />
          </div>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
