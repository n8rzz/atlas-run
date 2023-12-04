import { Fragment, useState } from 'react';
import { GameSettings } from './game-settings/GameSettings';
import { Questions } from './questions/Questions';
import { GameMode, GameState } from './GameActionBar.constants.ts';
import { usStatesWithCities } from '../../domain/states-and-cities.ts';
import { buildCitiesOptionList } from './GameActionBar.utils.ts';
import { QuestionHeader } from './question-header/QuestionHeader.tsx';
import { ResultBanner } from './result-banner/ResultBanner.tsx';
import { ActionButtons } from './action-buttons/ActionButtons.tsx';

export function GameActionBar() {
  const [gameState, setGameState] = useState<GameState>(GameState.Off);
  const [gameSetting, setGameSetting] = useState<GameMode>(GameMode.None);
  const [selectedStateIndex, setSelectedStateIndex] = useState<number>(0);
  const [answerAttemptCount, setAnswerAttemptCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('');

  const selectedStateWithCities = usStatesWithCities[selectedStateIndex];
  const citiesOptionList = buildCitiesOptionList(selectedStateWithCities);

  const handleSelectAnswer = (selectedAnswer: string) => {
    setAnswerAttemptCount(answerAttemptCount + 1);
    setAnswer(selectedAnswer);
  };

  const handleReset = () => {
    setSelectedStateIndex(0);
    setAnswer('');
    setAnswerAttemptCount(0);
  };

  const handleMoveToNextQuestion = () => {
    setSelectedStateIndex(selectedStateIndex + 1);
    setAnswer('');
  };

  const handleStartGame = () => {
    setGameState(GameState.InProgress);
  };

  return (
    <Fragment>
      <GameSettings
        handleChangeGameSettings={setGameSetting}
        selectedGameMode={gameSetting}
      />
      <div className={'mt-4 text-left'}>
        <QuestionHeader
          answer={answer}
          answerAttemptCount={answerAttemptCount}
          selectedStateIndex={selectedStateIndex}
          selectedStateWithCities={selectedStateWithCities}
        />
        <ResultBanner
          answer={answer}
          selectedStateWithCities={selectedStateWithCities}
        />
        <Questions
          answer={answer}
          currentValue={answer}
          disabled={gameState === GameState.Off}
          handleSelectAnswer={handleSelectAnswer}
          isStartButtonDisabled={gameSetting === GameMode.None}
          onClickNext={handleMoveToNextQuestion}
          onClickReset={handleReset}
          onClickStartGame={handleStartGame}
          options={citiesOptionList}
          selectedStateIndex={selectedStateIndex}
          selectedStateWithCities={selectedStateWithCities}
        />
        <ActionButtons
          answer={answer}
          onClickNext={handleMoveToNextQuestion}
          onClickReset={handleReset}
          selectedStateIndex={selectedStateIndex}
          selectedStateWithCities={selectedStateWithCities}
        />
      </div>
    </Fragment>
  );
}
