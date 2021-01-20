import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
const PropertyListings = React.lazy(() => import('../pages/PropertyListings'));

// https://stackoverflow.com/questions/57890250/mock-out-imported-lazy-react-component
describe('<PropertyListings />', () => {
  test('renders Property Listings h1 element', async () => {
    render(
      <Suspense fallback={<p>Loading</p>}>
        <PropertyListings />
      </Suspense>
    );
    const textToMatch = await screen.findByText(/property listings/i);
    expect(textToMatch).toBeInTheDocument();
  });
});
