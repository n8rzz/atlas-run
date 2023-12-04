export enum GameState {
  Off = 'Off',
  InProgress = 'InProgress',
  Finished = 'Complete',
}

export enum GameMode {
  CapitalStates = 'CapitalStates',
  None = 'None',
  StateCapitals = 'StateCapitals',
}

export const gameModeLabels: Record<GameMode, string> = {
  [GameMode.CapitalStates]: 'Capital States',
  [GameMode.None]: '---',
  [GameMode.StateCapitals]: 'State Capitals',
};
