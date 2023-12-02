import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';
import { UiButton } from '../../shared/ui-button/UiButton.tsx';
import { UiResetButton } from '../../shared/ui-reset-button/UiResetButton.tsx';

export interface IProps {
  answer: string;
  answerAttemptCount: number;
  onClickNext: () => void;
  onClickReset: () => void;
  selectedStateIndex: number;
  selectedStateWithCities: IStateWithCities;
}

export function QuestionHeader(props: IProps) {
  return (
    <div className={'mb-3 flex justify-between'}>
      <div>
        <h3>
          {'State: '} <b>{props.selectedStateWithCities.name}</b>
        </h3>

        <p>
          {'Capital: '} <b>{props.answer}</b>
        </p>

        <p>
          {'Attempts: '}{' '}
          <b>
            {props.answerAttemptCount}
            {' / '}
            {props.selectedStateIndex}
          </b>
        </p>
      </div>
      <div className={'flex flex-col space-x-2'}>
        <button
          className={'disabled:opacity-75'}
          disabled={props.answer !== props.selectedStateWithCities.capital}
          onClick={props.onClickNext}
        >
          <UiButton>{'Next Question'}</UiButton>
        </button>
        <button
          className={'disabled:opacity-75'}
          disabled={props.selectedStateIndex === 0}
          onClick={props.onClickReset}
        >
          <UiResetButton>{'Reset'}</UiResetButton>
        </button>
      </div>
    </div>
  );
}
