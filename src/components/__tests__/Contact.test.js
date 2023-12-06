import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Contact from "../Contact";


test('should load contanct us componet', () => {

    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument()
});

test('should load button inside contanct us componet', () => {

    render(<Contact />);
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument()
});

test('should load 2 input boxes on the contanct us componet', () => {

    render(<Contact />);

    // Querying
    const textBox = screen.getAllByRole("textbox");

    // Assertion
    expect(textBox.length).toBe(2);
    // expect(textBox.length).not.toBe(3);
})