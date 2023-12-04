import { render, screen } from '@testing-library/react';
import { GameActionBar } from './GameActionBar.tsx';

describe('GameActionBar', () => {
  describe('when passed default props', () => {
    test('should render', () => {
      render(<GameActionBar />);

      expect(screen.getByRole('button', { name: 'Next Question' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
    });
  });

  describe('when game has not started', () => {
    describe('and GameSetting is None', () => {
      test('should render cover with disabled start button', () => {
        render(<GameActionBar />);

        expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
      });
    });

    // TODO: wire up click action
    // describe('and GameSetting is StateCapitals', () => {
    //   test('should render cover with start button', async () => {
    //     render(<GameActionBar />);
    //
    //     expect(screen.getByRole('button', { name: 'Start' })).not.toBeDisabled();
    //   });
    // });
  });
});
