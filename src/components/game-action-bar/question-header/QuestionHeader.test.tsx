import { QuestionHeader } from './QuestionHeader';
import { render, screen } from '@testing-library/react';
import { IStateWithCities } from '../../../domain/states-and-cities.types.ts';
import { usStatesWithCities } from '../../../domain/states-and-cities.ts';

describe('QuestionHeader', () => {
  const answerMock = 'Answer Mock';
  const answerAttemptCountMock = 7;
  const selectedStateIndexMock = 0;
  const selectedStateWithCitiesMock: IStateWithCities = usStatesWithCities[selectedStateIndexMock];

  describe('when passed default props', () => {
    test('should render', () => {
      render(
        <QuestionHeader
          answer={answerMock}
          answerAttemptCount={answerAttemptCountMock}
          selectedStateIndex={selectedStateIndexMock}
          selectedStateWithCities={selectedStateWithCitiesMock}
        />,
      );

      expect(screen.getByText(answerMock)).toBeInTheDocument();
    });
  });
});
