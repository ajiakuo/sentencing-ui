import { React } from 'react';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { factors, factorGroups } from '../scope';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';

const renderGroup = (group) => {
  const renderItem = (
    group.type === "binary" ?
    (factor) => <FactorCheckBox name={factor.name} label={factor.text} vibe={factor.vibe} /> :
    (factor) => <FactorSlider name={factor.name} label={factor.text} />
  );

  return (
    <>
      <Typography variant="h6">{group.title}</Typography>
      { group.factors.map((name) => {
        let factor = factors.find(i => i.name === name);
        return (!factor.valid_before && renderItem(factor));
      })}
    </>
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
      <Grid container direction="column">
        { ["tristate", "binary"].map((type) => (
          <Grid item xs={12} lg={6}>
            { factorGroups.filter(group => group.type === type).map(renderGroup) }
          </Grid>
        )) }
      </Grid>
    </>
  );
};
