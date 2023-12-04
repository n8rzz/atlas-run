import { GameActionBar } from './components/game-action-bar/GameActionBar';
import { UsStatesMap } from './components/us-states-map/UsStatesMap.tsx';
import { Title } from './components/game-action-bar/title/Title.tsx';

export function App() {
  return (
    <div className={'flex flex-col align-center'}>
      <Title />

      <div className={'mx-auto min-w-[500px]'}>
        <GameActionBar />
      </div>
      <div className={'mt-8 h-[500px] overflow-hidden'}>
        <UsStatesMap />
      </div>
    </div>
  );
}
