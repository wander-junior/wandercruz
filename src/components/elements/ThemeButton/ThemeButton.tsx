"use client"

import { ThemeContext } from "@/components/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";

function ThemeIcon({ theme }: { theme: string }) {
    return theme === 'dark'
        ? <MoonIcon className="h-4 w-4" />
        : <SunIcon className="h-4 w-4" />
}

export function ThemeButton() {
    const { toggleThemeHandler, theme } = useContext(ThemeContext)

    return <button className="btn" onClick={toggleThemeHandler}><ThemeIcon theme={theme} /></button>
}