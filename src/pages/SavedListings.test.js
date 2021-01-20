import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
const SavedListings = React.lazy(() => import('../pages/SavedListings'));

describe('<SavedListings />', () => {
  test('renders Saved Listings h1 element', async () => {
    render(
      <Suspense fallback={<p>Loading</p>}>
        <SavedListings />
      </Suspense>
    );
    const textToMatch = await screen.findByText(/saved listings/i);
    expect(textToMatch).toBeInTheDocument();
  });
});
