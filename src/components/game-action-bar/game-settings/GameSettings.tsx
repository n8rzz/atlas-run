import { ChangeEvent } from 'react';
import { GameMode, gameModeLabels } from '../GameActionBar.constants.ts';

interface IProps {
  handleChangeGameSettings: (setting: GameMode) => void;
  selectedGameMode: GameMode;
}

export function GameSettings(props: IProps) {
  const handleGameSettingsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.handleChangeGameSettings(event.target.value as GameMode);
  };

  return (
    <div>
      <div className={'text-center'}>
        <h2 className={'my-2'}>
          {`Settings: `} <b>{gameModeLabels[props.selectedGameMode]}</b>
        </h2>
      </div>

      <div className={'ml-2'}>
        <select
          name={'game-settings'}
          onChange={handleGameSettingsChange}
        >
          <option value={GameMode.StateCapitals}>
            {gameModeLabels[GameMode.StateCapitals]}
          </option>
          <option value={GameMode.CapitalStates}>
            {gameModeLabels[GameMode.CapitalStates]}
          </option>
          {/*<option value={'States'}>{'States'}</option>*/}
          {/*<option value={'Cities'}>{'Cities'}</option>*/}
        </select>
      </div>
    </div>
  );
}
