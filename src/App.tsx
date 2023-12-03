import { GameActionBar } from './components/game-action-bar/GameActionBar';

export function App() {
  return (
    <div className={'flex flex-col align-center'}>
      <div className={'w-full min-w-[400px]'}>
        <GameActionBar />
      </div>
      <div
        className={
          'mt-8 w-full h-[300px] border-2 border-amber-600 border-solid'
        }
      >
        {'MAP'}
      </div>
    </div>
  );
}
