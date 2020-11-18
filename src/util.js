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

function filterSpec(list) {
  const date = new Date(); // TODO: Allow selecting pre-amendment items?
  return list.filter((item) => (
    (item.valid_before === undefined || date < item.valid_before) &&
    (item.valid_after === undefined || date >= item.valid_after)
  ));
}

export function useCrimes() {
  return filterSpec(crimes);
}

export function useFactors() {
  return filterSpec(factors);
}

export function useFactorGroups() {
  const factors = useFactors();
  return factorGroups.map((group) => ({
    factors: group.factors.map((name) => factors.find((factor) => factor.name === name)),
    ...group
  }));
}

export function useCrimeCategories() {
  const crimes = useCrimes();
  const categories = new Map();

  crimes.forEach((crime) => {
    if (!categories.has(crime.category))
      categories[crime.category] = new Map(); // of kinds

    let category = categories[crime.category];
    if (!category.has(crime.kind))
      category[crime.kind] = {
        stages: new Set(),
        variants: new Set(),
      };

    let kind = category[crime.kind];
    if (crime.stage) kind.stages.add(crime.stage);
    if (crime.variant) kind.variants.add(crime.variant);
  });

  return Array.from(categories, (i) => {
    let [category, kinds] = i;
    return {
      title: category,
      kinds: Array.from(kinds, (j) => {
        let [text, kind] = j;
        return {
          text: text,
          stages: kind.stages.size > 1 ? [...kind.stages] : null,
          variants: kind.variants.size > 0 ? [...kind.variants] : null
        };
      }),
    };
  });
}
