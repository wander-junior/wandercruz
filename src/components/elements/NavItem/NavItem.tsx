import { type ReactNode } from "react";

interface NavItemProps {
    children: ReactNode
    isHome?: boolean
}

export function NavItem({ children, isHome }: NavItemProps) {
    const homeClasses = isHome ? 'sm:hidden' : ''

    return (
        <li className={homeClasses}>
            <a>{children}</a>
        </li>
    )
}