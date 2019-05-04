import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    position: "absolute",
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    paddingRight: '42px',
    outline: 'none',
  },
});

class SimpleModal extends Component {

  render() {
    const { classes, isOpen, onClose } = this.props;

    return (
      <div>
        <Modal
          open={isOpen}
          onClose={onClose}
        >
          <div className={classes.paper}>
            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleModal);