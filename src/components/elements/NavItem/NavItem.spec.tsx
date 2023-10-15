import { render, screen, within } from "@testing-library/react"
import { NavItem } from "./NavItem";

describe("<NavItem />", () => {
    it('should properly render the component', () => {
        render(<NavItem>Item</NavItem>)

        const content = screen.getByText('Item')

        expect(content).toBeInTheDocument()
    })

    it('should set correct classes when rendering home item', () => {
        render(<NavItem isHome={true}>Item</NavItem>)

        const listItem = screen.getByRole('listitem')
        expect(listItem).toHaveClass('sm:hidden')
    })
})