import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { HeaderItem } from "../HeaderItem/HeaderItem";

export function NavList() {
    return (
        <>
            <HeaderItem isHome>Home</HeaderItem>
            <HeaderItem>About</HeaderItem>
            <HeaderItem>Blog</HeaderItem>
            <HeaderItem>Projects</HeaderItem>
            <HeaderItem>
                Github <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </HeaderItem>
        </>
    )
}