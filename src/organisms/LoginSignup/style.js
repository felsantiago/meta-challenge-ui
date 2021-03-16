import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from 'polished';

const useStyles = makeStyles((theme) => ({
  prospectContainer: {
    background: theme.palette.prospect.background,
    color: theme.palette.prospect.text,
    width: '100%',
    height: '100vh'
  },
  responsiveContainer: {
    maxWidth: '884px',
    width: '100%',
    margin: '0 auto',
    padding: '96px 0 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'unset',
      padding: '72px 20px 26px'
    }
  },
  logoImgSize: {
    maxWidth: '180px',
    marginBottom: '56px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '126px',
      marginBottom: '48px'
    }
  },
  textInfo: {
    maxWidth: '336px'
  },
  title: {
    fontSize: '24px',
    lineHeight: '38px',
    fontWeight: '300',
    letterSpacing: '-0.38px',
    margin: '0',
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
  },
  description: {
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '32px',
    fontWeight: '300',
    maxWidth: '312px',
    '& strong': {
      fontWeight: '700'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px'
    }
  },
  btnCtaMobile: {
    marginTop: '64px'
  },
  btnForm: {
    background: theme.palette.ctaPrimary.background,
    color: theme.palette.ctaPrimary.text,
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '284px',
    width: '100%',
    lineHeight: '56px',
    display: 'inline-block',
    fontWeight: '700',
    fontSize: '16px',
    cursor: 'pointer',
    '&:hover': {
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
  mobileOnly: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  desktopOnly: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
