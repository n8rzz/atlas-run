import { ChangeEvent } from 'react';
import { ILabelValue } from './Questions.types.ts';

interface IProps {
  answerAttemptCount: number;
  currentStateName: string;
  currentValue: string;
  handleSelectAnswer: (answer: string) => void;
  options: ILabelValue[];
}

export function Questions(props: IProps) {
  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) =>
    props.handleSelectAnswer(event.target.value);

  return (
    <div className={'mt-4 text-left'}>
      <div className={'my-3'}>
        <h3>
          {'State: '} <b>{props.currentStateName}</b>
        </h3>

        <p>
          {'Capital: '} <b>{props.currentValue}</b>
        </p>

        <p>
          {'Attempts: '} <b>{props.answerAttemptCount}</b>
        </p>
      </div>

      <form>
        <ul className={'my-6'}>
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
