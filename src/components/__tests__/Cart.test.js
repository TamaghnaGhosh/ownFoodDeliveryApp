import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom"
import RestrurantMenuPage from "../RestrurantItems/RestrurantMenuPage"

import MockResMenu from "../../MockData/MockResMenu.json"

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MockResMenu)
}));

it('should load restrurant menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestrurantMenuPage />
            </Provider>
        </BrowserRouter>))
    const accordionHeader = screen.getByText('Bowl (1)');
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(1)
})