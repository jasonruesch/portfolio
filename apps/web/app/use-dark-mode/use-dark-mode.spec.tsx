import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useDarkMode from './use-dark-mode';

describe('useMedia', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDarkMode());

    // expect(result.current.count).toBe(0);

    act(() => {
      // result.current.increment();
    });

    // expect(result.current.count).toBe(1);
  });
});
