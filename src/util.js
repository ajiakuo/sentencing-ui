import { courts } from './scope';

const parseCaseID = (id) => {
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

const formatSentence = (sentence) => (
  sentence > 12 ? `${Math.floor(sentence / 12)} 年 ${sentence % 12} 個月` :
  sentence > 0 ? `${sentence} 個月` :
  sentence === -1 ? '無期徒刑' :
  sentence === -2 ? '死刑' :
  '無罪' // 無罪推定！(*ﾟ∀ﾟ)
);

export { parseCaseID, formatSentence };
