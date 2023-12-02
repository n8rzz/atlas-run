export enum GameMode {
  CapitalStates = 'CapitalStates',
  StateCapitals = 'StateCapitals',
}

export const gameModeLabels: Record<GameMode, string> = {
  [GameMode.CapitalStates]: 'Capital States',
  [GameMode.StateCapitals]: 'State Capitals',
};
