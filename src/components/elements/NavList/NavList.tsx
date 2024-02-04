import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { NavItem } from "../NavItem/NavItem";

export function NavList() {

    return (
        <>
            <NavItem isHome>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>
                Github <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </NavItem>
        </>
    )
}