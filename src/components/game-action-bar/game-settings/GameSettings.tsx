import { ChangeEvent } from 'react';
import { GameMode, gameModeLabels } from '../GameActionBar.constants.ts';
import { UiLabelInputGroup } from '../../shared/ui-label-input-group/UiLabelInputGroup.tsx';

interface IProps {
  handleChangeGameSettings: (setting: GameMode) => void;
  selectedGameMode: GameMode;
}

export function GameSettings(props: IProps) {
  const handleGameSettingsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.handleChangeGameSettings(event.target.value as GameMode);
  };

  return (
    <div className={'my-3 text-left'}>
      <div className={'text-center'}>
        <h2 className={'font-bold'}>{'Settings'}</h2>
      </div>

      <form>
        <UiLabelInputGroup>
          <label
            className={'mr-2'}
            htmlFor={'gameMode'}
          >
            {'Game Mode'}
          </label>
          <select
            id={'gameMode'}
            name={'gameMode'}
            onChange={handleGameSettingsChange}
          >
            <option value={GameMode.None}>{gameModeLabels[GameMode.None]}</option>
            <option value={GameMode.StateCapitals}>{gameModeLabels[GameMode.StateCapitals]}</option>
            <option value={GameMode.CapitalStates}>{gameModeLabels[GameMode.CapitalStates]}</option>
          </select>
        </UiLabelInputGroup>
        <UiLabelInputGroup>
          <label
            className={'mr-2'}
            htmlFor={'capitalSelectionMode'}
          >
            {'Capital Selection Mode'}
          </label>
          <select
            id={'capitalSelectionMode'}
            name={'capitalSelectionMode'}
          >
            <option value={'None'}>{'---'}</option>
            <option value={'capitalsOnly'}>{'Capitals Only'}</option>
            <option value={'capitalAndStateCities'}>{'Capital & State Cities'}</option>
          </select>
        </UiLabelInputGroup>
      </form>
    </div>
  );
}
