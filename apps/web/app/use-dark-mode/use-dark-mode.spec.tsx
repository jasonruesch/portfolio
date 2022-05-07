import { act, renderHook } from '@testing-library/react';
import useDarkMode from './use-dark-mode';

describe('useDarkMode', () => {
  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should render successfully', () => {
    windowSpy.mockImplementation(() => ({
      matchMedia: (_: string) => ({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      }),
    }));

    const { result } = renderHook(() => useDarkMode());

    expect(result.current).toBeFalsy();

    act(() => {
      result.current = true;
    });

    expect(result.current).toBeTruthy();
  });
});
