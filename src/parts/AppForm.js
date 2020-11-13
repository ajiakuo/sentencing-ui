import { React } from 'react';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { factorGroups, factors } from '../scope';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';;
import FormAccordion from '../controls/FormAccordion';

const useStyles = makeStyles(() => ({
  root: {},
}), { name: 'AppForm' });

export default function SentencingForm() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <FormControl required>
          <InputLabel id="crimeNameLabel">罪名</InputLabel>
          <Select labelId="crimeNameLabel" value={0}>
            <MenuItem value={0}>吞食玻璃罪</MenuItem>
          </Select>
          <FormHelperText>§367 吞食玻璃不傷身體罪</FormHelperText>
        </FormControl>
        <FormAccordion defaultExpanded={true}
          summary={<Typography variant="h6">罪名</Typography>}>
        </FormAccordion>
      </Grid>
      <Grid item xs={12} sm={6} md={12} lg={6}>
        { factorGroups.map((group) => (
          <FormAccordion
            defaultExpanded={group.type !== "binary"}
            summary={(<Typography variant="h6">{group.title}</Typography>)}>
            { group.factors.map((name) => {
              let factor = factors.find(i => i.name === name);
              return (!factor.valid_before && (
                <div>
                  { group.type === "binary" ?
                    <FactorCheckBox name={factor.name} label={factor.text} vibe={group.vibe} /> :
                    <FactorSlider name={factor.name} label={factor.text} />
                  }
                </div>
              ));
            })}
          </FormAccordion>
        )) }
      </Grid>
    </Grid>
  );
};
