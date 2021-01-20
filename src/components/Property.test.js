import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../utils/testUtils';
import App from './App';

describe('<Property />', () => {
  test('renders multiple Property components', async () => {
    renderWithRouter(<App />, { route: '/listings' });
    const listingArray = await screen.findAllByText(/list date:/i);
    expect(listingArray.length).toBeGreaterThan(0);
  });

  test('save click calls localStorage setItem', async () => {
    renderWithRouter(<App />, { route: '/listings' });

    const listingsText = await screen.findByText(/Property Listings/i);
    expect(listingsText).toBeInTheDocument();

    // set up localStorage mock here so we only catch the onClick setItem call 
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });

    const leftClick = { button: 0 };
    const saveButton = screen.getAllByTestId('save-button')[0];
    userEvent.click(saveButton, leftClick);

    // in handleClick getItem is called first
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    // then setItem is called
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    // first arg should be a string of only numbers - "12345678"
    expect(window.localStorage.setItem.mock.calls[0][0]).toMatch(/^[0-9]*$/);
    // second arg should be a string of an array numbers - "[12345678]"
    expect(window.localStorage.setItem.mock.calls[0][1]).toMatch(/^[[0-9]*]$/);
  });
});
