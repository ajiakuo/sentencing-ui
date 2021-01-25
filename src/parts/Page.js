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
                <Typography variant="subtitle1">使用說明</Typography>
                <Typography variant="subtitle2">原理</Typography>
                <Typography variant="body2">
                  本量刑系統以民國106年1月1日起至109年1月31日止，全國各「地方法院」判決之普通殺人既遂罪（刑法第271條第1項）、普通殺人未遂罪（刑法第271條第2項）、傷害致死罪（刑法第277條第2項前段）共1,027則「有期徒刑」量刑結果為基礎（<u>不含無罪判決、死刑與無期徒刑判決</u>），根據機器學習（machine learning）方法計算量刑因子權重所建立，以提供系統使用者就過往類似案件中，在量刑時如何衡酌各項量刑因子的整體圖像，作為當前案件的量刑參考資訊。
                </Typography>
                <Typography variant="subtitle2">使用</Typography>
                <ol>
                  <li>請首先選擇您所設想的案件之「罪名」，再將案件中應予加重、減輕或維持中立的量刑因子，依序輸入系統中。</li>
                  <li>請先勾選「法定加重事由」（例如有累犯的情況）和「法定減輕事由」（例如有自首的情況）的各項加重或減輕事由。</li>
                  <li>在「法定科刑注意事項」欄位，列出了刑法第57條第1至10款的科刑輕重標準應注意事項。若您認為所設想的案件情況中，有某項因子應造成刑罰加重（例如您認為被告的犯罪手段特別兇殘），請將該項因子的滑桿向右方「+」拉動（此時因子滑桿將呈現紅色）；若認為有某項因子應使刑罰減輕（例如您認為被告犯罪後之態度良好），請將滑桿向左方「-」拉動（此時該項因子滑桿將呈現綠色）；若認為屬於中立（例如您認為被告的生活狀況並無特別影響刑罰應加重或減輕之處），則不移動滑桿。</li>
                  <li>以上均輸入完畢後，請按下「計算」按鈕，系統將根據過去地方法院量處有期徒刑之判決中，呈現出的量刑因子整體圖像進行運算後，輸出以下結果供您作為量刑的參考：<br />
                  「量刑估計區間」<br />
                  「因素權重瀑布圖」（輸入因子對量刑估計區間的影響權重，單位：月）<br />
                  「相似判決」（系統判斷與輸入因子相似的判決）<br />
                  「判決細部比較」（系統考量之輸入因子與系統中判決之因子比較）。</li>
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
