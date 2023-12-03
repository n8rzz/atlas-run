import { UiResetButton } from './UiResetButton.tsx';
import { render, screen } from '@testing-library/react';

describe('UiResetButton', () => {
  describe('when passed default props', () => {
    test('should render', () => {
      render(<UiResetButton>{'Reset Button'}</UiResetButton>);

      expect(
        screen.getByRole('button', { name: 'Reset Button' }),
      ).toBeInTheDocument();
    });
  });
});
