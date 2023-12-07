import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


it('should render the header Component with a login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Logout" });
    expect(loginButton).toBeInTheDocument();
})

it('should render the header Component with a (0) Cart', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("(0)");
    expect(cartItems).toBeInTheDocument();
})

it('should render the header Component with a Cart Item', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

it('should change the button name from Login to Logout ', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Logout" });

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", { name: "Login" });
    
    expect(logOutButton).toBeInTheDocument();
})