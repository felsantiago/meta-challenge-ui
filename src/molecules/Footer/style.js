import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: '100%',
    background: theme.palette.footer.background,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.footerMobile.background,
      textAlign: 'center'
    }
  },
  responsiveContainer: {
    maxWidth: '884px',
    width: '100%',
    margin: '0 auto',
    padding: '56px 0'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  socialLinks: {
    display: 'inline-block',
    listStyle: 'none',
    padding: '8px 0 0',
    margin: 0,
    verticalAlign: 'bottom',
    '& li': {
      display: 'inline-block',
      overflow: 'hidden',
      width: '28px',
      height: '28px',
      marginLeft: '8px'
    },
    '& a div:first-child': {
      verticalAlign: 'baseline'
    },
    [theme.breakpoints.down('sm')]: {
      '& li': {
        margin: '0 4px'
      }
    }
  },
  contentRight: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  gridVerticalAlign: {
    lineHeight: '44px'
  },
  copyright: {
    fontSize: '12px',
    color: theme.palette.footer.text,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.footerMobile.text,
      display: 'block',
      textAlign: 'center'
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
