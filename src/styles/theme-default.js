import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  info: {
    name: 'meta',
    title: 'meta',
    logoPrimary: 'https://www.meta.com.br/wp-content/uploads/2021/01/1.png',
    logoSecondary: 'https://www.meta.com.br/wp-content/uploads/2021/01/1.png',
    logoTertiary: 'https://www.meta.com.br/wp-content/uploads/2021/01/1.png'
  },
  palette: {
    primary: {
      main: '#262B3C',
      text: '#FFFFFF'
    },
    basic: {
      background: '#FFFFFF',
      text: '#262B3C',
      title: '#262B3C',
      link: '#262B3C',
      error: '#ED3F21'
    },
    footer: {
      background: '#262B3C',
      text: '#FFFFFF'
    },
    footerMobile: {
      background: '#F5F4F4',
      text: '#262B3C'
    },
    prospect: {
      background: '#2A3042',
      text: '#262B3C',
      form: {
        background: '#F5F4F4',
        text: '#262B3C',
        shadow: '0px 6px 12px #0000001A'
      }
    },
    ctaPrimary: {
      background: '#34C38F',
      text: '#FFF'
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
