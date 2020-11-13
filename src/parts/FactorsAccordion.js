import { React } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { factors } from '../scope';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';

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
    '&$expanded': {
      margin: '12px 0',
    }
  },
  expanded: {},
}), { name: 'CondenseAccordionSummary' })(AccordionSummary);

export default function FactorsAccordion(props) {
  const classes = useStyles();

  // Helpers
  const group = props.group;
  const renderItem = (
    group.type === "binary" ?
    (factor) => <FactorCheckBox name={factor.name} label={factor.text} vibe={group.vibe} /> :
    (factor) => <FactorSlider name={factor.name} label={factor.text} />
  );

  return (
    <CondenseAccordion elevation={0} defaultExpanded={group.type !== "binary"} className={classes.root}>
      <CondenseAccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        <Typography variant="h6">{group.title}</Typography>
      </CondenseAccordionSummary>
      <AccordionDetails className={classes.details}>
      { group.factors.map((name) => {
        let factor = factors.find(i => i.name === name);
        return (!factor.valid_before && (
          <div>
            {renderItem(factor)}
          </div>
        ));
      })}
      </AccordionDetails>
    </CondenseAccordion>
  );
};
