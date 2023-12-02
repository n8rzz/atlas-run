import { GameActionBar } from './components/game-action-bar/GameActionBar';

export function App() {
  return (
    <div className={'flex flex-col align-center'}>
      <div className={'w-full min-w-[400px]'}>
        <GameActionBar />
      </div>
      <div className={'mt-3'}>{'MAP'}</div>
    </div>
  );
}
