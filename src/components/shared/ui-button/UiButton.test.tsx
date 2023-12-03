import { UiButton } from './UiButton.tsx';
import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';

describe('UiButton', () => {
  const classNameMock = '';
  const disabledMock = false;
  const onClickMock = vitest.fn();

  describe('when passed default props', () => {
    test('should render', () => {
      render(
        <UiButton
          className={classNameMock}
          disabled={disabledMock}
          onClick={onClickMock}
        >
          {'UiButton'}
        </UiButton>,
      );

      expect(screen.getByRole('button', { name: 'UiButton' })).toBeInTheDocument();
    });
  });
});
