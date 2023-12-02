import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

export interface IProps {
  selectedStateWithCities: IStateWithCities;
  answer: string;
  answerAttemptCount: number;
}

export function QuestionHeader(props: IProps) {
  return (
    <div className={'my-3 flex justify-between'}>
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
      <button>{'Next Question'}</button>
    </div>
  );
}
