import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
const NotFound = React.lazy(() => import('../pages/NotFound'));

describe('<NotFound />', () => {
  test('renders Not Found h1 element', async () => {
    render(
      <Suspense fallback={<p>Loading</p>}>
        <NotFound />
      </Suspense>
    );
    const textToMatch = await screen.findByText(/not found/i);
    expect(textToMatch).toBeInTheDocument();
  });
});
