import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from '../Body'
import MockFetchRestroCardsData from '../../MockData/MockFetchRestroCardsData.json'

global.fetch = jest.fn(() => {
    return Promise.resolve(({
        json: () => {
            return Promise.resolve(MockFetchRestroCardsData)
        },
    }));
});

it('should search res list for burger test input', async () => {

    await act(async () => { render(<BrowserRouter><Body /></BrowserRouter>) })


    const cardsBeforeSearch = screen.getAllByTestId('ResCardtestId');

    expect(cardsBeforeSearch.length).toBe(20);

    const searchButton = screen.getByRole("button", { name: "Search" });

    const seachInput = screen.getByTestId('seachInputTestId');

    fireEvent.change(seachInput, { target: { value: "burger" } });

    fireEvent.click(searchButton);

    //The screen should load the remaining filtered data
    const cardsAfterSearch = screen.getAllByTestId("ResCardtestId");

    expect(cardsAfterSearch.length).toBe(2);
})

it('should filter res list poular', async () => {

    await act(async () => { render(<BrowserRouter><Body /></BrowserRouter>) })
    const cardsBeforeFliter = screen.getAllByTestId('ResCardtestId');

    expect(cardsBeforeFliter.length).toBe(20);
    const topRatedRestrurantsBtns = screen.getByRole("button", { name: "Top Rated Resrtrurant" });
    fireEvent.click(topRatedRestrurantsBtns);

    const cardsAfterFliter = screen.getAllByTestId("ResCardtestId");
    // console.log(cardsAfterFliter.length);
    expect(cardsAfterFliter.length).toBe(8);
})