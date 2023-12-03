import { UiResetButton } from './UiResetButton.tsx';
import { render, screen } from '@testing-library/react';

describe('UiResetButton', () => {
  const onClickMock = vitest.fn();

  describe('when passed default props', () => {
    test('should render', () => {
      render(<UiResetButton onClick={onClickMock}>{'Reset Button'}</UiResetButton>);

      expect(screen.getByRole('button', { name: 'Reset Button' })).toBeInTheDocument();
    });
  });

  describe('when #disabled is passed as true', () => {
    test('should render a disabled button', () => {
      render(
        <UiResetButton
          disabled={true}
          onClick={onClickMock}
        >
          {'Disabled UiResetButton'}
        </UiResetButton>,
      );

      expect(screen.getByRole('button', { name: 'Disabled UiResetButton' })).toBeDisabled();
    });
  });
});
