import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom"
import Header from "../Header";
import RestrurantMenuPage from "../RestrurantItems/RestrurantMenuPage"

import MockResMenu from "../../MockData/MockResMenu.json"
import Cart from "../Cart";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MockResMenu)
}));

it('should load restrurant menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestrurantMenuPage />
                <Cart />
            </Provider>
        </BrowserRouter>))
        
    const accordionHeader = screen.getByText('Specials (6)');

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);

    // expect(screen.getByText('Cart')).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    expect(screen.getByText('Cart is empty. Add items to the cart!')).toBeInTheDocument();
})