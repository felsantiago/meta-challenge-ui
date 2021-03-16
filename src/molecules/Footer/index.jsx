import PropTypes from 'prop-types';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';

import useStyles from './style';

const Footer = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.responsiveContainer}>
        <Grid container direction='row' justify='space-between' alignItems='center'>
          <Grid item xl={6} md={6} sm={12} xs={12} className={classes.gridVerticalAlign}>
            <div className={`${classes.logo} ${classes.mobileOnly}`}>
              <Image
                src='/images/minu-club-primary.svg'
                alt='meta'
                width='100'
                height='44'
              />
            </div>
            <div className={`${classes.logo} ${classes.desktopOnly}`}>
              <Image
                src='/images/minu-club-secondary.svg'
                alt='meta'
                width='100'
                height='44'
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  text: 'Meta © 2020 | Todos os direitos reservados.'
};

Footer.propTypes = {
  text: PropTypes.string
};

export default Footer;
