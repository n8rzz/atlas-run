import { GameActionBar } from './components/game-action-bar/GameActionBar';
import { UsStatesMap } from './components/us-states-map/UsStatesMap.tsx';

export function App() {
  return (
    <div className={'flex flex-col align-center'}>
      <header className={'mb-3'}>
        <h1 className={'title relative'}>{'Atlas Run'}</h1>
      </header>

      <div className={'mx-auto min-w-[500px]'}>
        <GameActionBar />
      </div>
      <div className={'mt-8 h-[500px] overflow-hidden'}>
        <UsStatesMap />
      </div>
    </div>
  );
}
