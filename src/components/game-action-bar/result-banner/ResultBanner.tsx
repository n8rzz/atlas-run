import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

interface IProps {
  answer: string;
  selectedStateWithCities: IStateWithCities;
}

export function ResultBanner(props: IProps) {
  return (
    <div className={'my-3'}>
      {props.answer === props.selectedStateWithCities.capital && 'CORRECT!!'}
      {props.answer !== props.selectedStateWithCities.capital &&
        'Not quite, try again.'}
    </div>
  );
}
