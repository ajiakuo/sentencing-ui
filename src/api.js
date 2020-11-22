// api.js
// This file is where we load and treat non-spec conforming APIs, normalizing their data.

const API_URL = 'http://ext-sentencing.rschiang.dev'; /*! The API used in this project not affiliated nor endorsed technically or academically by @rschiang. We’re just not committing their server IP into the codebase, and the courtesy “parking” of their IP under the subdomain may be retracted at any time. */

console.info('%cNote: The API used in this project is not endorsed by project developer or the domain owner. See LICENSE.txt for details.', 'font-style: italic; color: gray');

export const fetchPrediction = async (params) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'SentencingUI',
    },
    body: new FormData(params),
    mode: 'no-cors',
    credentials: 'omit',
    cache: 'no-store',
    /* // We’re not using these options for now, but it’s nice to put it here
    // in case we need a more complex implementation.
    redirect: 'follow',
    keepalive: false,
    signal: new AbortController().signal,
    */
  });

  if (!response.ok)
    throw new Error(`API call failed: HTTP ${response.status}`);

  const data = await response.json();

  // Reformat the data to match the application spec
  return {
    estimation: data.prison_m,
    related_cases: data.related_cases.map((c) => ({
      id: c.caseindex,
      relevance: c.sim,
      crime: c.Svalue,
      sentence: c.prison_m,
      labels: c.labels.map((l) => ({
        factor: l.Ctype,
        summary: l.Ctext,
        value: l.Cvalue
      }))
    }))
  };
}
