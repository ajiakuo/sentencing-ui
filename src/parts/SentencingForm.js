import { React } from 'react';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { factorGroups } from '../scope';
import FactorsAccordion from './FactorsAccordion';

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
              <FactorsAccordion group={group} />
            )) }
          </Grid>
        )) }
      </Grid>
    </>
  );
};
