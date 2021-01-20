import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { renderWithRouter } from '../utils/testUtils';
import Header from './Header';
import App from './App';

describe('<Header />', () => {
  test('renders home link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('home-icon');
    expect(homeLink).toBeInTheDocument();
  });

  test('renders listings link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const listingsLink = screen.getByText(/listing/i);
    expect(listingsLink).toBeInTheDocument();
  });

  test('renders saved link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const savedLink = screen.getByText(/saved/i);
    expect(savedLink).toBeInTheDocument();
  });

  test('navigates from home to listings page', async () => {
    renderWithRouter(<App />);
    const homeText = await screen.findByText(/Home/i);
    expect(homeText).toBeInTheDocument();

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/listings/i), leftClick);

    const listingsText = await screen.findByText(/Property Listings/i);
    expect(listingsText).toBeInTheDocument();
  });
});
