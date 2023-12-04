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
    return <div className={'my-4 px-2 py-2 text-center rounded'} />;
  }

  return (
    <div
      className={clsx({
        ['my-4 px-2 py-2 text-center text-black font-bold rounded']: true,
        ['bg-red-300']: !hasCorrectAnswer,
        ['bg-green-300']: hasCorrectAnswer,
      })}
    >
      <b>
        {hasCorrectAnswer && 'CORRECT!!'}
        {!hasCorrectAnswer && 'Not quite, try again.'}
      </b>
    </div>
  );
}
