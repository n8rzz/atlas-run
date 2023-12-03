import { ChangeEvent } from 'react';
import { ILabelValue } from './Questions.types.ts';
import { UiButton } from '../../shared/ui-button/UiButton.tsx';
import { UiResetButton } from '../../shared/ui-reset-button/UiResetButton.tsx';
import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

interface IProps {
  answer: string;
  currentValue: string;
  handleSelectAnswer: (answer: string) => void;
  onClickNext: () => void;
  onClickReset: () => void;
  options: ILabelValue[];
  selectedStateIndex: number;
  selectedStateWithCities: IStateWithCities;
}

export function Questions(props: IProps) {
  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.handleSelectAnswer(event.target.value);
  };

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

      <div className={'flex flex-col space-x-2'}>
        <UiButton
          className={'disabled:opacity-75'}
          disabled={props.answer !== props.selectedStateWithCities.capital}
          onClick={props.onClickNext}
        >
          {'Next Question'}
        </UiButton>
        <UiResetButton
          disabled={props.selectedStateIndex === 0}
          onClick={props.onClickReset}
        >
          {'Reset'}
        </UiResetButton>
      </div>
    </div>
  );
}
