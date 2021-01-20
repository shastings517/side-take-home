import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
const Home = React.lazy(() => import('../pages/Home'));

describe('<Home />', () => {
  test('renders Home h1 element', async () => {
    render(
      <Suspense fallback={<p>Loading</p>}>
        <Home />
      </Suspense>
    );
    const textToMatch = await screen.findByText(/home/i);
    expect(textToMatch).toBeInTheDocument();
  });
});
