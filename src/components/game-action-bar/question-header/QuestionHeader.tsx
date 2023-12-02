import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

export interface IProps {
  answer: string;
  answerAttemptCount: number;
  onClickNext: () => void;
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
          {'Attempts: '} <b>{props.answerAttemptCount}</b>
        </p>
      </div>
      <button onClick={props.onClickNext}>{'Next Question'}</button>
    </div>
  );
}
