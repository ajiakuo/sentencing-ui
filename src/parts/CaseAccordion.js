import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button, LinearProgress, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { parseCaseID, formatSentence, formatCaseURL } from '../util';

const useStyles = makeStyles((theme) => ({
  heading: {
    flexGrow: 1,
  },
  metaControl: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '6rem',
    flexBasis: '7rem',
    flexShrink: 1,
    marginLeft: theme.spacing(1),
  },
  metaRow: {
    display: 'flex',
  },
  metadata: {
    ...theme.typography.caption,
    color: theme.palette.text.secondary,
    '&:first-child': {
      flexGrow: 1,
    }
  },
  relevance: {
    transform: 'rotateY(180deg)',
  },
  details: {
    flexDirection: 'column',
  },
  labels: {
    marginTop: theme.spacing(1) - 20,
    marginBottom: 20 - theme.spacing(1),
  },
  label: {
    '&[hidden]': {
      opacity: 0.54,
    }
  },
  icon: {
    padding: theme.spacing(1),
  },
}), { name: 'CaseAccordion' });

export default function CaseAccordion(props) {
  const classes = useStyles();
  const case_id = parseCaseID(props.id);

  const renderFactorValue = (value) => (
    value === 1 ? <AddIcon /> :
    value === -1 ? <RemoveIcon /> :
    value === 0 ? null :
    value);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1" className={classes.heading}>{ case_id.formatted_text }</Typography>
        <div className={classes.metaControl}>
          <div className={classes.metaRow}>
            <Typography component="div" className={classes.metadata}>{ formatSentence(props.sentence) }</Typography>
            <Typography component="div" className={classes.metadata}>{ `0.${Math.round(props.relevance * 1000)}` }</Typography>
          </div>
          <LinearProgress variant="determinate" value={props.relevance * 100} className={classes.relevance} />
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        { props.factors && (
        <TableContainer className={classes.labels}>
          <Table aria-label="量刑因素標記">
            <TableHead>
              <TableRow>
                <TableCell>輸入</TableCell>
                <TableCell>量刑因素</TableCell>
                <TableCell>本案</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { props.factors.map((factor) =>
                <TableRow key={factor.name} className={classes.label}>
                  <TableCell className={classes.icon}>{ renderFactorValue(factor.input) }</TableCell>
                  <TableCell>{ factor.text }</TableCell>
                  <TableCell className={classes.icon}>{ renderFactorValue(factor.value) }</TableCell>
                </TableRow>
              )}
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
