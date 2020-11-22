import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Button, Table, TableContainer, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
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
  sourceButton: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2), // Align with table
    alignSelf: 'start',
  },
}));

export default function CaseAccordion(props) {
  const classes = useStyles();
  const factors = useFactors();
  const case_id = parseCaseID(props.id);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1" className={classes.heading}>{ case_id.formatted_text }</Typography>
        <Typography variant="subtitle1" className={classes.subheading}>{ `${Math.round(props.relevance * 100)}%` }：{ formatSentence(props.sentence) }</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        { props.labels && (
        <TableContainer className={classes.tableWrapper}>
          <Table aria-label="量刑因素標記">
            <TableBody>
              { props.labels.map((label) =>
                <TableRow>
                  <TableCell component="th" scope="row">{ factors.find(i => i.name == label.factor)?.text || label.factor }</TableCell>
                  <TableCell>{ label.value === 1 ? '+' : label.value === -1 ? '-' : label.value === 0 ? null : label.value }</TableCell>
                  <TableCell>{ label.summary }</TableCell>
                </TableRow>
              ) }
            </TableBody>
          </Table>
        </TableContainer>
        )}
        <Button className={classes.sourceButton} endIcon={<OpenInNewIcon />}
          target="_blank" href={formatCaseURL(case_id)}>
          在法學資料檢索系統檢視
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}
