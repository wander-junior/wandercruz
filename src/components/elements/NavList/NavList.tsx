import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { NavItem } from "../NavItem/NavItem";
import { useTranslations } from 'next-intl';


export function NavList() {
    const t = useTranslations('Navigation')

    return (
        <>
            <NavItem isHome>Home</NavItem>
            <NavItem>{t('about')}</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>{t('projects')}</NavItem>
            <NavItem>
                Github <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </NavItem>
        </>
    )
}