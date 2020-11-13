import { React } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { factors, factorGroups } from '../scope';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';

const useStyles = makeStyles((theme) => ({
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
}), { name: 'GroupAccordion' });

const GroupAccordion = (props) => {
  const classes = useStyles();
  const group = props.group;
  const renderItem = (
    group.type === "binary" ?
    (factor) => <FactorCheckBox name={factor.name} label={factor.text} vibe={group.vibe} /> :
    (factor) => <FactorSlider name={factor.name} label={factor.text} />
  );

  return (
    <Accordion elevation={0} defaultExpanded={group.type !== "binary"} className={classes.root}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        <Typography variant="h6">{group.title}</Typography>
      </AccordionSummary>
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
    </Accordion>
  );
}

export default function SentencingForm() {
  return (
    <>
      <div>
        <FormControl required>
          <InputLabel id="crimeNameLabel">罪名</InputLabel>
          <Select labelId="crimeNameLabel" value={0}>
            <MenuItem value={0}>吞食玻璃罪</MenuItem>
          </Select>
          <FormHelperText>§367 吞食玻璃不傷身體罪</FormHelperText>
        </FormControl>
      </div>
      <Grid container spacing={4}>
        { ["tristate", "binary"].map((type) => (
          <Grid item xs={12} sm={6} md={12} lg={6}>
            { factorGroups.filter(group => group.type === type).map((group) => (
              <GroupAccordion group={group} />
            )) }
          </Grid>
        )) }
      </Grid>
    </>
  );
};
