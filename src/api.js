// api.js -
// This file is where we load and treat non-spec conforming APIs, normalizing their data.

import { useFactors } from './util';

const API_URL = 'https://35.229.167.36/v1/predictions'; /*! The API used in this project is not technically nor academically endorsed by the project author. */
const TESTDRIVE_API_URL = 'http://localhost:9165/v1/predictions'; // For development purpose only. Eeeesh.
const ERROR_MARGIN = 18; // MAE as given

if (window)
  console.info('%cNote: The coded API is not endorsed by the hosting domain. See project license for details.', 'font-style: italic; color: gray');

export const fetchPrediction = async (crime, factors) => {
  // Map all the parameters to a FormData object
  const formData = new URLSearchParams();
  formData.append('Svalue', crime);

  // Iterate over known factors or the API wouldn’t be pleased :/
  const specFactors = useFactors()
  specFactors.forEach((factor) => {
    let value = factors[factor.name];
    formData.append(factor.name, value !== undefined ? value : 0);
  });

  // HACK: Enable the site to be hosted locally for demo purposes.
  const apiPath = window && window.location.hostname === 'localhost' ? TESTDRIVE_API_URL : API_URL;
  const response = await fetch(apiPath, {
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
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  let error_margin = data.error_margin || ERROR_MARGIN;

  // We used to single these into variables to perform clipping
  // (i.e. limiting rendered sentence within legal bound)
  // but now we’re asked to present untampered values.
  // Ideally these should be done in backend ツ
  let lower = data.estimation - error_margin;
  let upper = data.estimation + error_margin;

  // Reformat the data to match the application spec
  return {
    estimation: data.estimation,
    error_margin: error_margin,
    min_sentence: lower,
    max_sentence: upper,
    plot: data.plot_img,
    related_cases: data.related_cases.map((c) => ({
      _pk: c.caseindex,
      id: c.shortid2,
      relevance: c.sim,
      crime: c.Svalue,
      sentence: c.prison_m,
      subject: c.subject,
      labels: c.labels ? c.labels.map((l) => ({
        factor: l.Ctype,
        summary: l.Ctext,
        value: l.Cvalue
      })) : null,
      factors: c.factors ? specFactors.map((f) => ({
        name: f.name,
        text: f.text,
        disabled: !!(f.disabled),
        input: (factors[f.name] !== undefined ? factors[f.name] : 0),
        value: c.factors[f.name],
      })) : null,
    }))
  };
}
