import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

  test('calls localStorage getItem on load', () => {
    render(<App />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  
  test('calls localStorage setItem on load with userId', () => {
    render(<App />);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    // first arg is userId
    expect(window.localStorage.setItem.mock.calls[0][0]).toBe('userId');
    // second arg is random number
    expect(window.localStorage.setItem.mock.calls[0][1]).toEqual(expect.any(Number));
  });
});
