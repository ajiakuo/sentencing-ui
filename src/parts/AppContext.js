import React from 'react';
import { crimes } from '../spec';

export function createContext() {
  const date = new Date(); // TODO: Allow selecting pre-amendment items?
  const filteredCrimes = crimes.filter((crime) => (
    (crime.valid_before === undefined || date < crime.valid_before) &&
    (crime.valid_after === undefined || date >= crime.valid_after)
  ));

  // TODO: Build up crime categories
  const kinds = new Map();
  filteredCrimes.forEach((crime) => {
    if (!kinds.has(crime.kind)) {
      kinds[crime.kind] = {
        text: crime.kind,
        stages: [],
        variants: [],
      }
    }
  });

  return {
    crimes: filteredCrimes,
    factors: factors,
    courts: courts,
  }
}

export const AppContext = React.createContext({
  crimes: [],
  factors: [],
  courts: [],
});
