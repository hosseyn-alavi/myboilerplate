import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
//import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import {showSnack} from "../../redux/actions/snack";
import {connect} from "react-redux";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
    marginLeft: 10
  },
  closeIcon: {
    fontSize: 20,
    //marginLeft: 10
  },
  iconVariant: {
    opacity: 0.9,
    //marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    minWidth:240
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.closeIcon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};



class Snack extends Component {
  handleClick() {
    this.props.showSnack({open:false , content:""})
  }

handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.props.showSnack({open:false , content:""})
  }


  render() {
      const {snack} = this.props;
      if(snack.open){
          setTimeout(() => {
              this.props.showSnack({open:false , content:""})
          }, 5000);
      }
  return (

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snack.open}
        onClose={this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={this.handleClose.bind(this)}
          variant={snack.type ? snack.type : "info"}
          message={<span id="message-id">{snack.content ? snack.content :""}</span>}
        />
      </Snackbar>
      
  )}
}

const mapStateToProps = ({ snack }) => ({
  snack: snack
});

export default connect(mapStateToProps , {showSnack})(Snack)