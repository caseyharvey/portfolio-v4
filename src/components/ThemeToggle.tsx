import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { VscColorMode } from "react-icons/vsc"

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
          <div className="pl-6">
            <VscColorMode className="w-5 h-5 hover:text-gray-500 dark:hover:text-yellow-500" />
          </div>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
