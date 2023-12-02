export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface ICity {
  name: string;
  location: ILocation;
  population: number;
}

export interface IStateWithCities {
  name: string;
  capital: string;
  cities: ICity[];
  population: number;
  location: ILocation;
}
