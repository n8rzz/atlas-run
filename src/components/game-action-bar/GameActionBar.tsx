import { Fragment, useState } from 'react';
import { GameSettings } from './game-settings/GameSettings';
import { Questions } from './questions/Questions';
import { GameMode } from './GameActionBar.constants.ts';
import { usStatesWithCities } from '../../domain/states-and-cities.ts';
import { buildCitiesOptionList } from './GameActionBar.utils.ts';
import { QuestionHeader } from './question-header/QuestionHeader.tsx';
import { ResultBanner } from './result-banner/ResultBanner.tsx';

export function GameActionBar() {
  const [gameSetting, setGameSetting] = useState<GameMode>(
    GameMode.StateCapitals,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    setAnswerAttemptCount(0);
    // TODO: reset capital too
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
          onClickNext={() => setSelectedStateIndex(selectedStateIndex + 1)}
          onClickReset={handleReset}
        />

        <ResultBanner
          answer={answer}
          selectedStateWithCities={selectedStateWithCities}
        />

        <Questions
          currentValue={answer}
          handleSelectAnswer={handleSelectAnswer}
          options={citiesOptionList}
        />
      </div>
    </Fragment>
  );
}
