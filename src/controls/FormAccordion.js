import { React } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
  },
  summary: {
    paddingLeft: 0,
  },
  details: {
    padding: 0,
    flexDirection: 'column',
  }
}), { name: 'FactorsAccordion' });

const CondenseAccordion = withStyles(() => ({
  root: {
    '&$expanded': {
      margin: 0,
      '&:before': {
        opacity: 1,
      },
    },
  },
  expanded: {},
}), { name: 'CondenseAccordion' })(Accordion);

const CondenseAccordionSummary = withStyles(() => ({
  root: {
    '&$expanded': {
      minHeight: 'auto',
    }
  },
  content: {
    margin: '12px 0',
    maxWidth: 'calc(100% - 32px)',
    '&$expanded': {
      margin: '12px 0',
    }
  },
  expanded: {},
}), { name: 'CondenseAccordionSummary' })(AccordionSummary);

export default function FormAccordion(props) {
  const classes = useStyles();

  return (
    <CondenseAccordion elevation={0} className={classes.root} {...props}>
      <CondenseAccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        {props.summary}
      </CondenseAccordionSummary>
      <AccordionDetails className={classes.details}>
        {props.children}
      </AccordionDetails>
    </CondenseAccordion>
  );
};
