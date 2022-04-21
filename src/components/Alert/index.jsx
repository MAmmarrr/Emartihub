import React from 'react';
import PropTypes from 'prop-types';

import {
  Dialog, DialogContent, Grid, Button, DialogActions, Typography, withStyles,
} from '@material-ui/core';

// Material icons
import {
  NewReleases as WarningIcon,
  CheckCircle as CheckCircleIcon,
} from '@material-ui/icons';

// Component styles
import styles from './styles';

function Alert(props) {
  const {
    handleCancel, handleAccept, classes, open, alertText, handleClose, alertType,
  } = props;
  if (alertText && alertType) {
    return (
      <span>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          maxWidth="xs"
          aria-labelledby="confirmation-dialog-title"
          open={open}
        >
          <DialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                {alertType === 'success' && <CheckCircleIcon className={classes.iconGreen} />}
                {alertType === 'warning' && <WarningIcon className={classes.iconOrange} />}
                {alertType === 'error' && <WarningIcon className={classes.iconRed} />}
              </Grid>
              <Grid item xs={10} style={{ alignSelf: 'center' }}><Typography variant="h4">{alertText}</Typography></Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            {handleCancel && <Button color="primary" autoFocus onClick={handleCancel}>Cancel</Button>}
            {handleAccept && <Button color="primary" onClick={handleAccept}>Yes</Button>}
            {handleClose && <Button color="primary" onClick={handleClose}>Close</Button>}
          </DialogActions>
        </Dialog>
      </span>
    );
  }
  return null;
}

Alert.propTypes = {
  alertText: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Alert);
