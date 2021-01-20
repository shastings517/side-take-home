import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('<Loader />', () => {
  test('renders Loading text', () => {
    render(
      <Loader />
    );
    const loaderText = screen.getByText(/loading properties.../i);
    expect(loaderText).toBeInTheDocument();
  });
});
