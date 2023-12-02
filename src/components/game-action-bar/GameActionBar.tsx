import { Fragment, useState } from 'react';
import { GameSettings } from './game-settings/GameSettings';
import { Questions } from './questions/Questions';
import { questionListMock, usStates } from './__mock__/questions.mock.ts';

export function GameActionBar() {
  // FIXME: move value to enum
  const [gameSetting, setGameSetting] = useState<string>('Capitals');
  const [answerAttemptCount, setAnswerAttemptCount] = useState<number>(0);
  const [answer, setAnswer] = useState<string>('n/a');

  const randomStateIndex = Math.floor(Math.random() * usStates.length);

  const handleSelectAnswer = (answer: string) => {
    setAnswerAttemptCount(answerAttemptCount + 1);
    setAnswer(answer);
  };

  return (
    <Fragment>
      <GameSettings
        handleChangeGameSettings={setGameSetting}
        value={gameSetting}
      />
      <Questions
        answerAttemptCount={answerAttemptCount}
        currentStateName={usStates[randomStateIndex].name}
        currentValue={answer}
        handleSelectAnswer={handleSelectAnswer}
        options={questionListMock}
      />
    </Fragment>
  );
}
