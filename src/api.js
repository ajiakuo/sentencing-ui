// api.js -
// This file is where we load and treat non-spec conforming APIs, normalizing their data.

import { useFactors } from './util';

const API_URL = 'http://localhost:9165/v1/predictions'; /*! The API used in this project not affiliated nor endorsed technically or academically by the project author. */
const ERROR_MARGIN = 18; // MAE as given

console.info('%cNote: The API used in this project is not endorsed by project developer. See LICENSE.txt for details.', 'font-style: italic; color: gray');

export const fetchPrediction = async (crime, factors) => {
  // Map all the parameters to a FormData object
  const formData = new URLSearchParams();
  formData.append('Svalue', crime);

  // Iterate over known factors or the API wouldn’t be pleased :/
  useFactors().forEach((factor) => {
    let value = factors[factor.name];
    formData.append(factor.name, value !== undefined ? value : 0);
  });

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'Sentencing-UI',
    },
    body: formData,
    mode: 'cors',
    credentials: 'omit',
    cache: 'no-store',
    /* // We’re not using these options for now, but it’s nice to put it here
    // in case we need a more complex implementation.
    redirect: 'follow',
    keepalive: false,
    signal: new AbortController().signal,
    */
  });

  if (!response.ok) {
    // Note that the body of the error is just plain text error message
    // instead of a proper JSON object. We’re not sniffing them here.
    throw new Error(`API call failed: HTTP ${response.status}`);
  }

  const data = await response.json();

  // Reformat the data to match the application spec
  return {
    estimation: data.estimation,
    error_margin: data.error_margin || ERROR_MARGIN,
    related_cases: data.related_cases.map((c) => ({
      _pk: c.caseindex,
      id: c.shortid2,
      relevance: c.sim,
      crime: c.Svalue,
      sentence: c.prison_m,
      subject: c.subject,
      labels: c.labels.map((l) => ({
        factor: l.Ctype,
        summary: l.Ctext,
        value: l.Cvalue
      }))
    }))
  };
}
