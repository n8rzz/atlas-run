import { ChangeEvent } from 'react';
import { ILabelValue } from './Questions.types.ts';
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
    </div>
  );
}
