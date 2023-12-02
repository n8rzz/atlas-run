import { ChangeEvent } from 'react';
import { ILabelValue } from './Questions.types.ts';

interface IProps {
  currentValue: string;
  handleSelectAnswer: (answer: string) => void;
  options: ILabelValue[];
}

export function Questions(props: IProps) {
  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.handleSelectAnswer(event.target.value);
  };

  return (
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
  );
}
