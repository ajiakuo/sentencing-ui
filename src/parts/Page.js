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
import { useCrimes, formatSentence } from '../util';
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
  helpMessage: {
    color: theme.palette.text.secondary,
  },
}), { name: 'App' });

export default function App() {
  const classes = useStyles();

  // Form states
  const [crime, setCrime] = useState(-1);
  const [factors, setFactors] = useState({});

  // Application states
  const [status, setStatus] = useState('blank');
  const [data, setData] = useState({});
  const [errorCode, setErrorCode] = useState('');

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
    setErrorCode('');
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
      setErrorCode(e.message);
      setStatus('error');
    });
  };

  const handleClearForm = () => {
    setCrime(-1);
    setFactors({});
    setStatus('blank');
  };

  const formatPrediction = () => {
    // HACK: We’re asked to clip the estimation bound
    // out of courtesy, so we’ll just kinda leave it here
    let lower = data.estimation - data.error_margin;
    let upper = data.estimation + data.error_margin;
    let c = useCrimes().find((i) => i.value === crime);

    // Check if there are any aggrevation/mitigation factors
    // and only apply clip if there were none
    let clip = true;
    for (let factor_name in factors) {
      if (factor_name[0] !== 'c' && factors[factor_name] !== 0) {
        clip = false;
        break;
      }
    }

    // Clip according to the spec
    if (clip) {
      lower = Math.max(lower, c.min_sentence);
      upper = Math.min(upper, c.max_sentence);
    }

    return (lower < upper) ? `${formatSentence(lower)} ~ ${formatSentence(upper)}` : formatSentence(lower);
  }

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
          <AppMenu />
        </Toolbar>
      </AppBar>
      <Grid container component="main" className={classes.main}>
        <Grid item xs={12} md={6} lg={7} xl={6} component={Paper} elevation={3} className={classes.pane}>
          <div className={classes.content}>
            <AppForm crime={crime} factors={factors} onCrimeChanged={handleCrimeChanged} onFactorChanged={handleFactorChanged} />
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
                  formatPrediction()
                }</Typography>
                { data.plot &&
                  <img src={data.plot} className={classes.plot} />
                }
                <FormAccordion defaultExpanded={true} summary={
                  <Typography variant="caption" component="h5" className={clsx(classes.descriptor, classes.tipped)}>
                    <span>相似判決</span>
                    <Tooltip title="本系統提供使用者輸入之量刑因子相類似之判決，使用餘弦相似度計算數值，數值越高相似程度越高。">
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
              <div className={classes.helpMessage}>
                <Typography variant="subtitle2">使用說明</Typography>
                <Typography variant="body2">
                  <ol>
                    <li>本系統不含死刑與無期徒刑之案件。</li>
                    <li>「法定加重及法定減輕事由」，點選「V」清單可拉出/收攏，若有合乎相關條目情狀，請點選。</li>
                    <li>「法定科刑注意事項」中，若判斷該款應加重刑期，將滑桿向右方「+」拉動（呈現紅色）；若判斷該款應減輕刑期：將滑桿向左方「-」拉動（呈現綠色）；若感覺中立：則不移動滑桿，維持預設。</li>
                    <li>按下「計算」按鈕會出現估計結果。</li>
                    <li>估計結果含四個項目：「量刑估計區間」、「因素權重瀑布圖」（輸入因子對量刑估計區間的影響權重，單位：月）、「相似判決」（系統判斷與輸入因子相似的判決）、「判決細部比較」（系統考量之輸入因子與系統中判決之因子比較）。</li>
                  </ol>
                </Typography>
              </div>
            }
            { status === 'error' &&
              <div className={classes.message}>
                <Typography variant="body1">伺服器或網路錯誤，請再試一次。</Typography>
                { errorCode && <Typography variant="caption">{ errorCode }</Typography> }
              </div>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
