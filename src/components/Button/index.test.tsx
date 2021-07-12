import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import Button from '.';

describe('Button', () => {
  it('should exists', () => {
    expect(Button).toBeDefined();
  });
  it('should behave properly', () => {
    const mockFn = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button color="primary" onClick={mockFn}>
          Click Me!
        </Button>
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: 'Click Me!' });
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });
});
