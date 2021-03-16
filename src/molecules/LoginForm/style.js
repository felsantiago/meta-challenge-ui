import { makeStyles } from '@material-ui/core/styles';
import { darken, lighten } from 'polished';

const useStyles = makeStyles((theme) => ({
  absoluteRight: {
    position: 'absolute',
    right: '0',
    top: '96px'
  },
  formContainer: {
    background: theme.palette.prospect.form.background,
    color: theme.palette.prospect.form.text,
    maxWidth: '434px',
    width: '100%',
    borderRadius: '16px',
    boxShadow: theme.palette.prospect.form.shadow,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
      borderRadius: 'unset',
      boxShadow: 'unset'
    }
  },
  formContent: {
    padding: '64px 40px'
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: '300',
    letterSpacing: '-0.38px',
    margin: '0 0 52px',
    fontFamily: 'Cartograph-Light, Cartograph, Roboto, sans-serif',
    '& strong': {
      display: 'block',
      fontWeight: '700',
      fontFamily: 'Cartograph-Bold-Italic, Cartograph, Roboto, sans-serif'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '28px',
      letterSpacing: '-0.32px'
    }
  },
  textField: {
    marginBottom: '24px',
    '& label': {
      fontWeight: '400',
      color: theme.palette.textField.labelColor
    },
    '& fieldset': {
      borderColor: theme.palette.textField.borderColor
    },
    '& input': {
      color: theme.palette.textField.text
    },
    '& label.Mui-focused': {
      color: theme.palette.textField.text
    },
    '& .Mui-error fieldset': {
      borderColor: theme.palette.basic.error
    },
    '& label.Mui-error': {
      color: theme.palette.basic.error
    }
  },
  btnForm: {
    background: theme.palette.ctaPrimary.background,
    color: theme.palette.ctaPrimary.text,
    border: 'none',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '284px',
    width: '100%',
    lineHeight: '56px',
    display: 'block',
    fontWeight: '700',
    fontSize: '16px',
    margin: '32px auto 0',
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#FFFFFF'
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
