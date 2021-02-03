import { React, useState } from 'react';
import clsx from 'clsx';
import { AppBar, Avatar, Button, CircularProgress, Grid, Paper, Toolbar, Tooltip, Typography } from '@material-ui/core';
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
  helpMessage: {
    '& h5': {
      color: theme.palette.text.secondary,
    },
    '& h6': {
      margin: '1em 0',
      color: theme.palette.text.secondary,
    },
    '& p': {
      margin: '0 0 1em 1em',
    },
    '& li': {
      marginBottom: '0.5em',
    },
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
                <Typography variant="caption" component="h5" className={clsx(classes.descriptor, classes.tipped)}>
                  <span>量刑估計區間</span>
                  <Tooltip title="系統計算出的量刑估計區間，是加入正負平均絕對誤差值得出。其上、下限顯示可能超出法定刑或處斷刑之範圍，但實際個案科刑仍應遵守法定刑和處斷刑之法律規定。">
                    <HelpIcon className={classes.helpIcon} />
                  </Tooltip>
                </Typography>
                <Typography variant="h4" component="div" className={classes.sentence}>{
                  (data.min_sentence < data.max_sentence) ?
                  `${formatSentence(data.min_sentence)} ~ ${formatSentence(data.max_sentence)}` :
                  formatSentence(data.min_sentence)
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
                <Typography variant="subtitle1" component="h5">「司法院109年刑事殺人罪案件量刑資訊系統資料庫更新」</Typography>
                <Button component="a" href="https://reurl.cc/g82RNz" rel="external">系統使用手冊</Button>
                <Typography variant="subtitle2">使用說明與聲明</Typography>
                <ol>
                  <li><strong><u>在使用本系統前，請務必詳讀「系統使用手冊」。</u></strong>系統使用手冊之內容，包含系統原理與注意事項、瀑布圖例說明及操作方法等。</li>
                  <li>本系統為實然面（法院實際上如何科刑）的展現，不能作為「應然面」（法院應如何科刑始為正確）的科刑指導。</li>
                  <li>本系統是一種「量刑資訊輔助系統」，<strong>不能擴張或壓縮法院依法得審酌各種量刑相關事由的裁量空間，也不能取代法律所規定的法定刑或處斷刑之上、下限。</strong></li>
                  <li>以上均輸入完畢後，請按下「計算」按鈕，系統將根據過去地方法院量處有期徒刑之判決中，呈現出的量刑因子整體圖像進行運算後，輸出以下結果供您作為系統計算出的「量刑估計區間」是加入正負平均絕對誤差值所得出，因此區間的上、下限顯示，有可能超出法定刑或處斷刑之範圍，惟<strong><u>實際之個案科刑仍應遵守法定刑和處斷刑之法律規定。</u></strong></li>
                </ol>
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
