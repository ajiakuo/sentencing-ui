import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { courts } from '../scope';

const useStyles = makeStyles((theme) => ({
  heading: {
    flexGrow: 1,
  },
  subheading: {
    color: theme.palette.text.secondary,
  },
  externalButton: {
    margin: '-12px -12px -12px 12px',
  },
  tableWrapper: {
    marginTop: -12,
  }
}));

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

const formatCaseURL = ((cid) => `https://law.judicial.gov.tw/FJUD/qryresult.aspx?jud_court=${cid.court}&jud_sys=M&jud_year=${cid.year}&jud_case=${cid.case}&jud_no=${cid.no}&judtype=JUDBOOK`);

export default function CaseAccordion(props) {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary>
        <Typography className={classes.heading}>{ parseCaseID(props.id).formatted_text }</Typography>
        <Typography className={classes.subheading}>{ props.sentencing } 個月</Typography>
        <IconButton className={classes.externalButton} size="medium" aria-label="在法學資料檢索系統檢視"
          target="_blank" href={formatCaseURL(parseCaseID(props.id))}
          onClick={(event) => event.stopPropagation()}>
          <OpenInNewIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer className={classes.tableWrapper}>
          <Table aria-label="量刑因素標記">
            <TableBody>
              { ([1, 2, 3, 4, 5]).map((row) =>
                <TableRow key={row}>
                  <TableCell component="th" scope="row">§57({ row })</TableCell>
                  <TableCell>至其餘上訴意旨，無非仍執其等在原審之同一辯解</TableCell>
                </TableRow>
              ) }
            </TableBody>
          </Table>
        </TableContainer>
        <Typography>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
