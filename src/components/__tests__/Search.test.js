import { render, screen } from "@testing-library/react"
import Body from '../Body'
import MockFetchRestroCardsData from '../../MockData/MockFetchRestroCardsData.json'

global.fetch = jest.fn(() => {
    return Promise.resolve(({
        json: () => {
            return Promise.resolve(MockFetchRestroCardsData)
        },
    }));
});

it('should render the body component with search', () => {
    render(<Body />)
    // const button = screen.getByRole("button")
    // expect(button).toBeInTheDocument()
})