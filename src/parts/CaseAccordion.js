import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button, Table, TableContainer, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { parseCaseID, formatSentence, formatCaseURL, useFactors } from '../util';

const useStyles = makeStyles((theme) => ({
  heading: {
    flexGrow: 1,
  },
  subheading: {
    color: theme.palette.text.secondary,
  },
  details: {
    flexDirection: 'column',
  },
  tableWrapper: {
    marginTop: theme.spacing(1) - 20,
    marginBottom: 20 - theme.spacing(1),
  },
  sourceButton: {/*
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2), // Align with table
    alignSelf: 'start',*/
  },
}));

export default function CaseAccordion(props) {
  const classes = useStyles();
  const factors = useFactors();
  const case_id = parseCaseID(props.id);

  // We’re asked to sort the labels by their factor instead of their occurrence.
  // It would be better if we highlight them contextually or at least deduplicate
  // the values/find some clever algorithms to reduce the time complexity,
  // but I’m tired of this so whatever.
  let labels = [];
  if (props.labels) {
    let counts = {};
    labels = props.labels.map((label, label_i) => {
      let factor_i = factors.findIndex(i => i.name == label.factor);
      counts[label.factor] = (counts[label.factor] || 0) + 1;
      return {
        index: (factor_i * 100 + label_i),
        factor_text: (factor_i >= 0) ? factors[factor_i].text : null,
        ...label };
    });

    labels.sort((a, b) => a.index - b.index);
    labels.reduce((prev, cur) => {
      if (cur.factor !== prev) {
        cur.group_first = true;
        cur.group_count = counts[cur.factor];
      }
      return cur.factor;
    }, null);
  }

  return (
    <Accordion data-relevance={Math.round(props.relevance * 100)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1" className={classes.heading}>{ case_id.formatted_text }</Typography>
        <Typography variant="subtitle1" className={classes.subheading}>{ formatSentence(props.sentence) }</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        { labels.length > 0 && (
        <TableContainer className={classes.tableWrapper}>
          <Table aria-label="量刑因素標記" size="small">
            <TableBody>
              { labels.map((label) =>
                <TableRow>
                  { label.group_first &&
                    <TableCell component="th" scope="row" rowSpan={label.group_count}>{ label.factor_text || label.factor }</TableCell>
                  }
                  <TableCell>{ label.value === 1 ? '+' : label.value === -1 ? '-' : label.value === 0 ? null : label.value }</TableCell>
                  <TableCell>{ label.summary }</TableCell>
                </TableRow>
              ) }
            </TableBody>
          </Table>
        </TableContainer>
        )}
      </AccordionDetails>
      <AccordionActions>
        <Button className={classes.sourceButton} endIcon={<OpenInNewIcon />}
          target="_blank" href={formatCaseURL(case_id)}>
          在法學資料檢索系統檢視
        </Button>
      </AccordionActions>
    </Accordion>
  );
}
