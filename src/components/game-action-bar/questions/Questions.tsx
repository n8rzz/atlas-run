import './Questions.css';
import { ChangeEvent } from 'react';
import { ILabelValue } from './Questions.types.ts';
import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

interface IProps {
  answer: string;
  currentValue: string;
  disabled: boolean;
  handleSelectAnswer: (answer: string) => void;
  isStartButtonDisabled: boolean;
  onClickNext: () => void;
  onClickReset: () => void;
  onClickStartGame: () => void;
  options: ILabelValue[];
  selectedStateIndex: number;
  selectedStateWithCities: IStateWithCities;
}

export function Questions(props: IProps) {
  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.handleSelectAnswer(event.target.value);
  };

  if (props.disabled) {
    return (
      <div className={'startGameCover'}>
        <button
          disabled={props.isStartButtonDisabled}
          onClick={props.onClickStartGame}
        >
          {'Start'}
        </button>
      </div>
    );
  }

  return (
    <div className={'flex justify-between items-center'}>
      <form>
        <ul>
          {props.options.map((question) => (
            <li key={question.value}>
              <label>
                <input
                  type={'radio'}
                  name={'capital'}
                  defaultChecked={props.currentValue === question.value}
                  value={question.value}
                  className={'mr-2'}
                  onChange={handleAnswerChange}
                />
                {question.label}
              </label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
