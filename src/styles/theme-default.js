import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  info: {
    name: 'meta',
    title: 'meta',
    logoPrimary: '/images/minu-club-primary.svg',
    logoSecondary: '/images/minu-club-secondary.svg',
    logoTertiary: '/images/minu-club-tertiary.svg'
  },
  palette: {
    primary: {
      main: '#0A2D32',
      text: '#FFFFFF'
    },
    basic: {
      background: '#FFFFFF',
      text: '#0A2D32',
      title: '#0A2D32',
      link: '#0A2D32',
      error: '#ED3F21'
    },
    footer: {
      background: '#0A2D32',
      text: '#FFFFFF'
    },
    footerMobile: {
      background: '#F5F4F4',
      text: '#0A2D32'
    },
    prospect: {
      background: '#BEF5DC',
      text: '#0A2D32',
      form: {
        background: '#F5F4F4',
        text: '#0A2D32',
        shadow: '0px 6px 12px #0000001A'
      }
    },
    ctaPrimary: {
      background: '#B9E632',
      text: '#0A2D32'
    },
    textField: {
      borderColor: '#0B2D33',
      text: '#0B2D33',
      background: '#F5F4F4',
      labelColor: '#0B2D33'
    },
    cashbackCard: {
      borderColor: '#F5F4F4',
      background: '#F5F4F4'
    }
  }
});
