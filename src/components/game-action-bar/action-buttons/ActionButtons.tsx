import { UiButton } from '../../shared/ui-button/UiButton.tsx';
import { UiResetButton } from '../../shared/ui-reset-button/UiResetButton.tsx';
import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';

interface IProps {
  answer: string;
  onClickNext: () => void;
  onClickReset: () => void;
  selectedStateIndex: number;
  selectedStateWithCities: IStateWithCities;
}

export function ActionButtons(props: IProps) {
  return (
    <div className={'mt-4 flex items-center justify-between space-x-2'}>
      <UiResetButton
        disabled={props.selectedStateIndex === 0}
        onClick={props.onClickReset}
      >
        {'Reset'}
      </UiResetButton>
      <UiButton
        className={'disabled:opacity-50'}
        disabled={props.answer !== props.selectedStateWithCities.capital}
        onClick={props.onClickNext}
      >
        {'Next Question'}
      </UiButton>
    </div>
  );
}
