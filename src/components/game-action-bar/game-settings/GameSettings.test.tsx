import { render, screen } from '@testing-library/react';
import { GameSettings } from './GameSettings.tsx';
import { GameMode } from '../GameActionBar.constants.ts';
import { vitest } from 'vitest';

describe('GameSettings', () => {
  describe('when passed default props', () => {
    test('should render', () => {
      render(
        <GameSettings
          handleChangeGameSettings={vitest.fn()}
          selectedGameMode={GameMode.StateCapitals}
        />,
      );

      expect(screen.getByLabelText('Game Mode')).toBeInTheDocument();
      expect(screen.getByLabelText('Game Mode')).toHaveValue('None');
      expect(screen.getByLabelText('Capital Selection Mode')).toBeInTheDocument();
      expect(screen.getByLabelText('Capital Selection Mode')).toHaveValue('None');
    });
  });
});
