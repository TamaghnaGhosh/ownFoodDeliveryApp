import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import ResrtrurantCard, { WithLabelTopRatedRestrurants } from '../ResrtrurantCard';
import MockData from "../../utils/MockData.json"

it('should resturant card component with props data', () => {
    render(<ResrtrurantCard resData={MockData} />)
    const name = screen.getByText('Andhra Gunpowder')
    expect(name).toBeInTheDocument()
});

it('should render resturant card component with Popular Restaurant  label', () => {
    const TopRatedHigherOrderComponents = WithLabelTopRatedRestrurants(ResrtrurantCard);
    render(<TopRatedHigherOrderComponents resData={MockData} />)
    const name = screen.getByText('Andhra Gunpowder')
    expect(name).toBeInTheDocument()
})