import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';
import clsx from 'clsx';

interface IProps {
  answer: string;
  selectedStateWithCities: IStateWithCities;
}

export function ResultBanner(props: IProps) {
  const hasCorrectAnswer =
    props.answer !== '' && props.answer === props.selectedStateWithCities.capital;

  if (props.answer === '') {
    return null;
  }

  return (
    <div
      className={clsx({
        ['my-4 px-2 py-2 text-center rounded']: true,
        ['bg-red-300 text-white']: !hasCorrectAnswer,
        ['bg-green-300 text-black']: hasCorrectAnswer,
      })}
    >
      <b>
        {hasCorrectAnswer && 'CORRECT!!'}
        {!hasCorrectAnswer && 'Not quite, try again.'}
      </b>
    </div>
  );
}
