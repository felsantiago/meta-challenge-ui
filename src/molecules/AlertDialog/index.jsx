import PropTypes from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const AlertDialog = ({
 open, onClose, title, message, button
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
  >
    <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText
        dangerouslySetInnerHTML={{ __html: message }}
        id='alert-dialog-description'
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color='primary' autoFocus>
        {button}
      </Button>
    </DialogActions>
  </Dialog>
);

AlertDialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  button: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default AlertDialog;
