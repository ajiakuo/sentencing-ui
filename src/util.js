import { crimes, factors, factorGroups, courts } from './spec';

export function parseCaseID(id) {
  let m = id.match((/^(?<court>[A-Z]+),(?<year>\d+),(?<case>[^,]+),(?<no>\d+)$/));
  if (m != null) {
    // Leave out the court name if it’s Supreme Court
    let court_name = m.groups.court === 'TPS' ? '' : courts.find((e) => e.value == m.groups.court).text;
    return {
      database_id: id,
      court: m.groups.court,
      year: m.groups.year,
      case: m.groups.case,
      no: m.groups.no,
      formatted_text: `${court_name} ${m.groups.year} 年${m.groups.case}字第 ${m.groups.no} 號`
    };
  }
};

export function formatSentence(sentence) {
  if (sentence > 0) {
    let year = Math.floor(sentence / 12);
    if (year > 0) {
      let month = sentence % 12;
      return month > 0 ? `${year} 年 ${month} 個月` : `${year} 年`; }
    else
      return `${sentence} 個月`; }
  else
    return sentence === -1 ? '無期徒刑' :
           sentence === -2 ? '死刑' :
           '無罪'; // 無罪推定！(*ﾟ∀ﾟ)
};

export function formatCaseURL(cid) {
  return `https://law.judicial.gov.tw/FJUD/qryresult.aspx?jud_court=${cid.court}&jud_sys=M&jud_year=${cid.year}&jud_case=${cid.case}&jud_no=${cid.no}&judtype=JUDBOOK`;
}

export function useCrimes() {
  const date = new Date(); // TODO: Allow selecting pre-amendment items?
  return crimes.filter((crime) => (
    (crime.valid_before === undefined || date < crime.valid_before) &&
    (crime.valid_after === undefined || date >= crime.valid_after)
  ));
}

export function useFactorGroups() {
  // TODO
  return factorGroups;
}

export function buildSpec() {
  const crimes = useCrimes();

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
    factorGroups: factorGroups,
  }
}
