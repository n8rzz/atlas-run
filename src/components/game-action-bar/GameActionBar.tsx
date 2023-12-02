import { Fragment, useState } from 'react';
import { GameSettings } from './game-settings/GameSettings';
import { Questions } from './questions/Questions';
import { GameMode } from './GameActionBar.constants.ts';
import { usStatesWithCities } from '../../domain/states-and-cities.ts';
import { buildCitiesOptionList } from './GameActionBar.utils.ts';
import { QuestionHeader } from './question-header/QuestionHeader.tsx';

export function GameActionBar() {
  const [gameSetting, setGameSetting] = useState<GameMode>(
    GameMode.StateCapitals,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedStateIndex, _] = useState<number>(
    Math.floor(Math.random() * usStatesWithCities.length),
  );
  const [answerAttemptCount, setAnswerAttemptCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('n/a');

  const selectedStateWithCities = usStatesWithCities[selectedStateIndex];
  const citiesOptionList = buildCitiesOptionList(selectedStateWithCities);

  const handleSelectAnswer = (selectedAnswer: string) => {
    setAnswerAttemptCount(answerAttemptCount + 1);
    setAnswer(selectedAnswer);

    validateAnswer(selectedAnswer);
  };

  const validateAnswer = (selectedAnswer: string) => {
    const visual =
      selectedAnswer === selectedStateWithCities.capital
        ? '=== === :::: '
        : '!!! !!! !!!! ';

    console.log(visual, selectedAnswer, selectedStateWithCities.capital);
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
