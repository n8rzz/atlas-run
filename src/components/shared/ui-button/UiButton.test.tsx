import { UiButton } from './UiButton.tsx';
import { render, screen } from '@testing-library/react';

describe('UiButton', () => {
  const onClickMock = vitest.fn();

  describe('when passed default props', () => {
    test('should render', () => {
      render(<UiButton onClick={onClickMock}>{'UiButton'}</UiButton>);

      expect(screen.getByRole('button', { name: 'UiButton' })).toBeInTheDocument();
    });
  });

  describe('when #disabled is passed as true', () => {
    test('should render a disabled button', () => {
      render(
        <UiButton
          disabled={true}
          onClick={onClickMock}
        >
          {'Disabled UiButton'}
        </UiButton>,
      );

      expect(screen.getByRole('button', { name: 'Disabled UiButton' })).toBeDisabled();
    });
  });
});
