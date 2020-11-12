import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { courts } from '../scope';

const useStyles = makeStyles((theme) => ({
}));

const formatCaseID = (id) => {
  let m = id.match((/^(?<court>[A-Z]+),(?<year>\d+),(?<case>[^,]+),(?<no>\d+)$/));
  if (m != null) {
    // Leave out the court name if it’s Supreme Court
    let court = m.groups.court === 'TPS' ? '' : courts.find((e) => e.value == m.groups.court).text;
    return `${court} ${m.groups.year} 年${m.groups.case}字第 ${m.groups.no} 號`;
  }
};

export default function CaseAccordion(props) {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="subtitle1">{ formatCaseID(props.id) }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          至其餘上訴意旨，無非仍執其等在原審之同一辯解，就原審採證認事職權之適法行使，暨原判決已明確論斷詳細說明之事項，任意指為違法，並仍就其有無本件強盜殺人犯行之單純事實，暨與本件判決結果無關之細節問題，漫為爭執，均非依據卷內資料具體指摘原判決有何違背法令或不當，其等上訴均難認為有理由，應併予駁回。
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
