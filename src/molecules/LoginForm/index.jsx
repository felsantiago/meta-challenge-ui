import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import TextField from '../TextField';
import AlertDialog from '../AlertDialog';

import useStyles from './style';
import api from '../../services/api';

const ProspectForm = ({ absolute }) => {
  const classes = useStyles();

  const textData = {
    passwordLabel: 'Senha *',
    passwordPlaceholder: 'Digite a senha',
    emailLabel: 'E-mail *',
    emailPlaceholder: 'Digite seu e-mail',
    requiredMessage: 'Campo obrigatório.',
    invalidEmailMessage: 'E-mail inválido.'
  };

  const [modal, setModal] = useState({ alert: false });
  const [fields, setFields] = useState({});
  const [valid, setValid] = useState({
    email: false,
    password: false
  });

  const isValidData = () => valid && valid.email && valid.password;

  const handleCloseModal = () => setModal({ alert: false });

  const handleSubmit = async () => {
    try {
      await api.post('customers', {
        email: fields.email,
        password: fields.password
      });
    } catch (err) {
      <AlertDialog
        title='Erro'
        message='Erro ao cadastrar, tente novamente.'
        onClose={() => handleCloseModal()}
      />;
    }
  };

  return (
    <>
      <div
        className={`${classes.formContainer} ${
          absolute ? classes.absoluteRight : ''
        }`}
        name='form'
        id='form'
      >
        <div className={classes.formContent}>
          <h2 className={classes.title}>
            <strong>Faça seu Login</strong>
          </h2>
          <TextField
            autoComplete='off'
            id='InputEmail'
            data-testid='InputEmail'
            type='email'
            label={textData.emailLabel}
            placeholder={textData.emailPlaceholder}
            className={classes.textField}
            onChange={(event) => setFields({
                ...fields,
                email: event.target.value
              })}
            onValidStateChange={(state) => setValid({
                ...valid,
                email: state
              })}
            pattern={
              /^[a-zA-Z0-9+._%\-+]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+$/
            }
            invalidMessage={textData.invalidEmailMessage}
            InputLabelProps={{ shrink: true }}
            requiredMessage={textData.requiredMessage}
            required
            fullWidth
          />
          <TextField
            autoComplete='off'
            id='InputPassword'
            data-testid='InputPassword'
            label={textData.passwordLabel}
            placeholder={textData.passwordPlaceholder}
            className={classes.textField}
            onChange={(event) => setFields({
                ...fields,
                password: event.target.value
              })}
            onValidStateChange={(state) => setValid({
                ...valid,
                password: state
              })}
            InputLabelProps={{ shrink: true }}
            requiredMessage={textData.requiredMessage}
            required
            fullWidth
          />
          <Button
            className={classes.btnForm}
            disabled={!isValidData() || false}
            onClick={() => handleSubmit()}
          >
            Entrar
          </Button>
        </div>
      </div>
      {modal?.alert && (
        <AlertDialog
          title={modal?.title}
          message={modal?.message}
          button={modal?.button}
          open={modal?.alert}
          onClose={() => handleCloseModal()}
        />
      )}
    </>
  );
};

ProspectForm.defaultProps = {
  absolute: false
};

ProspectForm.propTypes = {
  absolute: PropTypes.bool
};

export default ProspectForm;
