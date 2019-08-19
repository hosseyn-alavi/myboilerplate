import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { styles } from "./style";
import { withStyles } from "@material-ui/styles";
import { setShowModal } from "../../../redux/actions/modals";
import Clear from "@material-ui/icons/Clear";
import MyFrom from "../../form";

class Minutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      minuteIdForDetail: null
    };
  }


  handleClose() {
    this.props.setShowModal({ open: false, caseNumber: null });
  }



  render() {
    const { classes } = this.props;
    return (
      <Dialog
        open={this.props.showMinutes.open}
        onClose={this.handleClose.bind(this)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className={classes.header} style={{ width: "100%" }}>
            دیالوگ
            <div style={{ cursor: "pointer", color: "gray" }}>
              <Clear onClick={this.handleClose.bind(this)} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <MyFrom loading={this.state.loading}>
             فرم اصلی
            </MyFrom>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = ({ modals }) => ({
  showMinutes: modals.setShowModal,
});

export default connect(
  mapStateToProps,
  { setShowModal }
)(withStyles(styles)(Minutes));
