import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

export interface IProps {
  answer: string;
  answerAttemptCount: number;
  selectedStateIndex: number;
  selectedStateWithCities: IStateWithCities;
}

export function QuestionHeader(props: IProps) {
  return (
    <div className={'mb-3'}>
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
    </div>
  );
}
