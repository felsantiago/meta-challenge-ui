import LoginForm from '../../molecules/LoginForm';

import useStyles from './style';

const ProspectSignup = () => {
  const classes = useStyles();

  return (
    <div className={classes.prospectContainer}>
      <div className={classes.responsiveContainer}>
        <LoginForm />
      </div>
    </div>
  );
};

export default ProspectSignup;
