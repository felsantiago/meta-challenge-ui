import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from 'polished';

const useStyles = makeStyles((theme) => ({
  rewardCloudContainer: {
    background: theme.palette.prospect.background,
    color: theme.palette.prospect.text,
    width: '100%',
    paddingBottom: '60px'
  },
  containerBrand: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginBottom: '46px'
    }
  },
  responsiveContainer: {
    display: 'flex',
    maxWidth: '884px',
    width: '100%',
    margin: '0 auto',
    padding: '65px 0 0',
    position: 'relative',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      paddingTop: '30px'
    }
  },
  wrapper: {
    background: '#fff',
    borderRadius: '16px',
    height: '100%',
    padding: '10px 20px',
    justifyContent: 'space-between'
  },
  btnForm: {
    lineHeight: '24px',
    background: theme.palette.ctaPrimary.background,
    color: theme.palette.ctaPrimary.text,
    border: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '284px',
    width: '100%',
    display: 'block',
    fontWeight: '700',
    fontSize: '13px',
    cursor: 'pointer',
    '&:hover': {
      cursor: 'pointer',
      background: darken(0.1, theme.palette.ctaPrimary.background),
      color: theme.palette.ctaPrimary.text
    },
    '& .Mui-disabled': {
      cursor: 'unset',
      color: lighten(0.1, theme.palette.ctaPrimary.background),
      background: lighten(0.1, theme.palette.ctaPrimary.text)
    },
    '& .MuiButton-label': {
      textTransform: 'initial'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset'
    }
  },
  containerButton: {
    padding: '0 0 10px !important',
    maxWidth: '220px',
    justifyContent: 'space-between'
  },
  colorhighlighter: {
    [theme.breakpoints.down('sm')]: {
      '&::before': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '50%',
        background: 'linear-gradient(0deg, #01DB87 50%, #BAE533 50%);',
        [theme.breakpoints.down('sm')]: {
          background: 'linear-gradient(90deg, #01DB87 50%, #BAE533 50%);',
          height: '100%'
        }
      },
      '&::after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: '50%',
        background: 'linear-gradient(0deg, #777CF9 50%, #02BAC6 50%);',
        [theme.breakpoints.down('sm')]: {
          background: 'linear-gradient(90deg, #777CF9 50%, #02BAC6 50%);',
          height: '100%'
        }
      },
      [theme.breakpoints.down('sm')]: {
        order: 1,
        height: '24px',
        width: '100%',
        display: 'flex'
      }
    }
  },
  containerImageRewardCloud: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '208px'
    }
  },
  containerContent: {
    marginLeft: '15px',
    maxWidth: '336px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0'
    }
  },
  containerTitle: {
    margin: '60px 0 40px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '48px'
    }
  },
  title: {
    fontSize: '16px',
    margin: '0',
    padding: '0 !important',
    fontWeight: '300',
    letterSpacing: '-0.38px',
    fontFamily: 'Cartograph-Light, Cartograph, Roboto, sans-serif',
    '& strong': {
      fontWeight: '700',
      fontFamily: 'Cartograph-Bold-Italic, Cartograph, Roboto, sans-serif'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      lineHeight: '32px',
      letterSpacing: '-0.32px'
    }
  }
}));

export default useStyles;
