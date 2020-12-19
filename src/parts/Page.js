import { React, useState } from 'react';
import clsx from 'clsx';
import { AppBar, Avatar, CircularProgress, Grid, Paper, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GavelIcon from '@material-ui/icons/Gavel';
import HelpIcon from '@material-ui/icons/HelpOutline';
import FormAccordion from '../controls/FormAccordion';
import FormToolbar from '../controls/FormToolbar';
import AppForm from './AppForm';
import AppMenu from './AppMenu';
import CaseAccordion from './CaseAccordion';
import { formatSentence } from '../util';
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
  prediction: {
    padding: theme.spacing(2),
  },
  sentence: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  plot: {
    maxWidth: '100%',
    marginTop: theme.spacing(2),
  },
  descriptor: {
    color: theme.palette.text.secondary,
  },
  tipped: {
    display: 'flex',
    alignItems: 'center',
  },
  helpIcon: {
    fontSize: '1rem',
  },
  message: {
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
  const [status, setStatus] = useState('blank');
  const [data, setData] = useState({});

  const handleCrimeChanged = (value) => {
    setCrime(value);

    // HACK: Forcefully set the factor on attempted crime.
    setFactors({...factors, mit_c25_2: (value == 2 ? 1 : 0)});
  };

  const handleFactorChanged = (_, name, value) => {
    setFactors((factors) => ({...factors, [name]: value}));
  };

  const handleSubmitForm = () => {
    // Clear out the current information
    setStatus('loading');
    setData({});

    // Build up form request and call API
    fetchPrediction(crime, factors)
    .then((data) => {
      // Sort the related cases by their relevance, DESCending.
      // We assume there would be no NaNs again, as they are invalid JSON values.
      data.related_cases.sort((a, b) => (Math.round(b.relevance * 100) - Math.round(a.relevance * 100)));

      setData(data);
      setStatus('ready');
    })
    .catch((e) => {
      console.log(e);
      setStatus('error');
    });
  };

  const handleClearForm = () => {
    setCrime(-1);
    setFactors({});
    setStatus('blank');
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
            <AppForm crime={crime} factors={factors} showFilter={showFilter} onCrimeChanged={handleCrimeChanged} onFactorChanged={handleFactorChanged} />
            <FormToolbar className={classes.controls} canSubmit={crime >= 0} onSubmit={handleSubmitForm} onClear={handleClearForm} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={6} className={classes.pane}>
          <div className={classes.content}>
            { status === 'loading' &&
              <CircularProgress className={classes.progress} />
            }
            { status === 'ready' &&
              <Paper elevation={1} className={classes.prediction}>
                <Typography variant="caption" component="h5" className={classes.descriptor}>量刑估計區間</Typography>
                <Typography variant="h4" component="div" className={classes.sentence}>{
                  data.estimation > data.error_margin ?
                  `${formatSentence(data.estimation - data.error_margin)} ~ ${formatSentence(data.estimation + data.error_margin)}` :
                  formatSentence(data.estimation)
                }</Typography>
                { data.plot &&
                  <img src={data.plot} className={classes.plot} />
                }
                <FormAccordion defaultExpanded={true} summary={
                  <Typography variant="caption" component="h5" className={clsx(classes.descriptor, classes.tipped)}>
                    <span>相關判決</span>
                    <Tooltip title="依照情狀相似程度，揀選前幾名的相似判決。">
                      <HelpIcon className={classes.helpIcon} />
                    </Tooltip>
                  </Typography>
                }>
                  { data.related_cases.map((i) =>
                    <CaseAccordion key={i.id} {...i} />
                  )}
                </FormAccordion>
              </Paper>
            }
            { status === 'blank' &&
              <div className={classes.message}>
                <Typography variant="body1">輸入變項後，按一下「計算」以取得預測結果。</Typography>
              </div>
            }
            { status === 'error' &&
              <div className={classes.message}>
                <Typography variant="body1">伺服器或網路錯誤，請再試一次。</Typography>
              </div>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
