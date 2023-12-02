import { ChangeEvent } from 'react';

interface IProps {
  handleChangeGameSettings: (setting: string) => void;
  value: string;
}

export function GameSettings(props: IProps) {
  const handleGameSettingsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    props.handleChangeGameSettings(event.target.value);
  };

  return (
    <div className={'flex'}>
      <h2 className={'my-2'}>
        {`Settings: `} <b>{props.value}</b>
      </h2>

      <div className={'ml-2 flex items-center'}>
        <select
          name={'game-settings'}
          onChange={handleGameSettingsChange}
        >
          <option value={'State Capitals'}>{'State Capitals'}</option>
          <option value={'Capital States'}>{'Capital States'}</option>
          <option value={'States'}>{'States'}</option>
          <option value={'Cities'}>{'Cities'}</option>
        </select>
      </div>
    </div>
  );
}
