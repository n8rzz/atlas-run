import { GameActionBar } from "./components/game-action-bar/GameActionBar";

export function App() {
  return (
    <div className={"flex flex-col align-center"}>
      <div className={"w-full"}>
        <GameActionBar />
      </div>
      <div className={"mt-3"}>{"MAP"}</div>
    </div>
  );
}
