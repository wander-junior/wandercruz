import React, { ReactNode } from "react";

interface HeaderItemProps {
    children: React.ReactNode
    isHome?: boolean
}

export function HeaderItem({ children, isHome }: HeaderItemProps) {
    const homeClasses = isHome ? 'sm:hidden' : ''

    return (
        <li className={homeClasses}>
            <a>{children}</a>
        </li>
    )
}