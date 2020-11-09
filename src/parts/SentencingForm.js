import { React, Component } from 'react';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { factors } from '../scope';
import FactorCheckBox from '../controls/FactorCheckBox';
import FactorSlider from '../controls/FactorSlider';

class SentencingForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        { factors.map((factor) => (
          <>
            <Typography variant="h6">{ factor.title }</Typography>
            <Grid container>
            { factor.items.map((item) => ( !item.valid_before &&
              <Grid item xs={12} lg={6}>
                { item.type === "binary" ? (
                  <FactorCheckBox name={item.name} label={item.text} />
                ) : (
                  <FactorSlider name={item.name} label={item.text} />
                ) }
              </Grid>
            )) }
            </Grid>
          </>
        )) }
      </>
    );
  }
}

export default SentencingForm;
