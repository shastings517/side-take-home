import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/testUtils';
import App from './App';

describe('<Routes />', () => {
  test('home route', async () => {
    renderWithRouter(<App />, { route: '/' });

    const matchText = await screen.findByText(/home/i);
    expect(matchText).toBeInTheDocument();
  });

  test('listings route', async () => {
    renderWithRouter(<App />, { route: '/listings' });

    const matchText = await screen.findByText(/property listings/i);
    expect(matchText).toBeInTheDocument();
  });

  test('saved route', async () => {
    renderWithRouter(<App />, { route: '/saved' });

    const matchText = await screen.findByText(/saved listings/i);
    expect(matchText).toBeInTheDocument();
  });

  test('landing on unknown route', async () => {
    renderWithRouter(<App />, { route: '/does-not-match' });

    const matchText = await screen.findByText(/not found/i);
    expect(matchText).toBeInTheDocument();
  });
});
