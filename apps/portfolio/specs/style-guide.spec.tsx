import React from 'react';
import { render } from '@testing-library/react';

import StyleGuide from '../pages/styleguide';

describe('StyleGuide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyleGuide />);
    expect(baseElement).toBeTruthy();
  });
});
