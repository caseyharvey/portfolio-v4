import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { VscColorMode } from "react-icons/vsc"

interface Props {
  theme?: any
  toggleTheme?: any
}

const ThemeToggle = (Props: Props) => {
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
            <VscColorMode className="w-5 h-5 hover:text-lightHover dark:hover:text-darkHover" />
          </div>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
