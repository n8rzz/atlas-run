import {
  ICity,
  IStateWithCities,
} from '../../domain/states-and-cities.types.ts';
import { ILabelValue } from './questions/Questions.types.ts';

export function buildCitiesOptionList(currentState: IStateWithCities) {
  return currentState.cities.map(
    (city: ICity): ILabelValue => ({ label: city.name, value: city.name }),
  );
}
