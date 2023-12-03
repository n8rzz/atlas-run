import { render, screen } from '@testing-library/react';
import { ResultBanner } from './ResultBanner.tsx';
import { usStatesWithCities } from '../../../domain/states-and-cities.ts';
import { expect } from 'vitest';

describe('ResultBanner', () => {
  const selectedStateWithCitiesMock = usStatesWithCities[0];

  describe('when passed default props', () => {
    test('should render', () => {
      render(
        <ResultBanner
          answer={''}
          selectedStateWithCities={selectedStateWithCitiesMock}
        />,
      );

      expect(() => screen.getByText('CORRECT!!')).toThrow();
      expect(() => screen.getByText('Not quite, try again.')).toThrow();
    });
  });

  describe('when passed an incorrect #answer', () => {
    test('should render incorrect answer test', () => {
      render(
        <ResultBanner
          answer={'Foo'}
          selectedStateWithCities={selectedStateWithCitiesMock}
        />,
      );

      expect(() => screen.getByText('CORRECT!!')).toThrow();
      expect(screen.getByText('Not quite, try again.')).toBeInTheDocument();
    });
  });

  describe('when passed a correct #answer', () => {
    test('should render correct answer text', () => {
      render(
        <ResultBanner
          answer={selectedStateWithCitiesMock.capital}
          selectedStateWithCities={selectedStateWithCitiesMock}
        />,
      );

      expect(screen.getByText('CORRECT!!')).toBeInTheDocument();
      expect(() => screen.getByText('Not quite, try again.')).toThrow();
    });
  });
});
