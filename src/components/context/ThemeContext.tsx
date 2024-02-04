"use client"

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    theme: "dark",
    toggleThemeHandler: () => { }
})

interface ThemePropsContext {
    children: JSX.Element
}

export function ThemeContextProvider({ children }: ThemePropsContext) {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        const storagedTheme = localStorage.getItem('uiTheme')
        if (storagedTheme === null) {
            matchMedia("(prefers-color-scheme: light)") && setTheme('light')
        }
        else {
            setTheme(storagedTheme)
        }
    }, [])

    const setStoragedTheme = (theme: string) => {
        setTheme(theme)
        localStorage.setItem('uiTheme', theme)
    }

    const toggleThemeHandler = () => {
        theme === "dark" ? setStoragedTheme("light") : setStoragedTheme("dark")
    }

    return (<ThemeContext.Provider value={{ theme, toggleThemeHandler }}>{children}</ThemeContext.Provider>)
}