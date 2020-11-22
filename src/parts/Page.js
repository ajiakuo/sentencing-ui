import { React, useState } from 'react';
import { AppBar, Avatar, CircularProgress, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GavelIcon from '@material-ui/icons/Gavel';
import FormToolbar from '../controls/FormToolbar';
import AppForm from './AppForm';
import AppMenu from './AppMenu';
import CaseAccordion from './CaseAccordion';
import { useFactors, formatSentence } from '../util';
import { fetchPrediction } from '../api';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  logo: {
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.secondary[400],
  },
  title: {
    flexGrow: 1,
  },
  main: {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.default,

    /* ToolBar mixin, but with padding */
    paddingTop: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingTop: 48,
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    }
  },
  pane: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
      overflowY: 'scroll',
    },
  },
  content: {
    margin: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    marginTop: theme.spacing(2),
    alignSelf: 'end',
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      bottom: theme.spacing(4),
    },
  },
  progress: {
    alignSelf: 'center',
  },
  crimePanel: {
    padding: theme.spacing(2),
  },
  onboardingPanel: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
}), { name: 'App' });

export default function App() {
  const classes = useStyles();

  // Form states
  const [crime, setCrime] = useState(-1);
  const [factors, setFactors] = useState({});
  const [showFilter, setShowFilter] = useState(false);

  // Application states
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleFactorChanged = (_, name, value) => {
    setFactors((factors) => ({...factors, [name]: value}));
  };

  const handleSubmitForm = () => {
    // Clear out the current information
    setLoading(true);
    setData({});

    // Build up form request and call API
    fetchPrediction(crime, factors)
    .then((data) => {
      console.log(data);
      setData(data);
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
  };

  const handleClearForm = () => {
    setCrime(-1);
    setFactors({});
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar className={classes.logo}>
            <GavelIcon />
          </Avatar>
          <Typography variant="h6" noWrap className={classes.title}>
            司法院量刑資訊系統
          </Typography>
          <AppMenu showFilter={showFilter} onShowFilterChanged={setShowFilter} />
        </Toolbar>
      </AppBar>
      <Grid container component="main" className={classes.main}>
        <Grid item xs={12} md={6} lg={7} xl={6} component={Paper} elevation={3} className={classes.pane}>
          <div className={classes.content}>
            <AppForm crime={crime} factors={factors} showFilter={showFilter} onCrimeChanged={setCrime} onFactorChanged={handleFactorChanged} />
            <FormToolbar className={classes.controls} canSubmit={crime >= 0} onSubmit={handleSubmitForm} onClear={handleClearForm} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={6} className={classes.pane}>
          <div className={classes.content}>
            { loading ?
              <CircularProgress className={classes.progress} /> :
              (data.estimation !== undefined) ?
              <>
                <Paper elevation={1} className={classes.crimePanel}>
                  <Typography variant="overline" gutterBottom>量刑預測</Typography>
                  <Typography variant="h4" component="div">{
                    data.estimation > data.errorMargin ?
                    `${formatSentence(data.estimation - data.errorMargin)} ~ ${formatSentence(data.estimation + data.errorMargin)}` :
                    formatSentence(data.estimation)
                  }</Typography>
                </Paper>
                { data.related_cases.map((i) =>
                  <CaseAccordion key={i.id} {...i} />
                )}
              </> :
              <div className={classes.onboardingPanel}>
                <Typography variant="body1">輸入變項後，按一下「計算」以取得預測結果。</Typography>
              </div>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
