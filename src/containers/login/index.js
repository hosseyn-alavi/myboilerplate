import React, { Component } from "react";
import MyPaper from "../../components/paper";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";
import {
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Fab
} from "@material-ui/core";
import { Formik } from "formik";
import MyFrom from "../../components/form";
import userIcon from "../../assets/icon/Group 339.png";
import starIcon from "../../assets/icon/Group 340.png";
import leftArrow from "../../assets/icon/left-arrow (2).png";
import * as Number from "../../utils/number";
import * as Logic from "./logic";
import { userLogin } from "../../redux/actions/upm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false
    };
  }

  componentDidMount() {}

  handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(true);
    // const data = `username=${values.username}&password=${
    //   values.password
    // }&grant_type=password`;
    // try {
    //   await this.props.userLogin(data);
    //   setSubmitting(false);
    //   console.log(this.props.upm);
    //   if (this.props.upm.loginResponse.status === 200) {
    //     this.setState({
    //       shouldRedirect: true
    //     });
    //     setSubmitting(false);
    //   } else if (this.props.upm.loginResponse.status === 400) {
    //     setSubmitting(false);
    //   } else {
    //     alert("unknown");
    //     setSubmitting(false);
    //   }
    // } catch {
    //   setSubmitting(false);
    // }
  };

  changeState(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { classes } = this.props;
    if (this.state.shouldRedirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <MyPaper cStyle={{ padding: 0 }}>
            <Grid container>
              <Grid item md={12} sm={12} xs={12}>
                <div className={classes.topCircle} />
                <div className={classes.midCircle} />
                <div className={classes.bottomCircle} />
                <div className={classes.header}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.title}
                  >
                    سامانه اتوماسیون ماده {Number.number(77)}
                  </Typography>
                </div>
              </Grid>
              <Formik
                validationSchema={Logic.validationSchema}
                //onSubmit={Logic.handleSubmit.bind(this, this.props.userLogin , this.state.upm)}
                onSubmit={this.handleSubmit}
                render={({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => (
                  <Grid item md={12} sm={12} xs={12}>
                    <MyFrom loading={isSubmitting}>
                      <div className={classes.formHolder}>
                        <div style={{ width: "60%" }}>
                          <TextField
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            className={classes.margin}
                            onBlur={handleBlur}
                            id="input-with-icon-textfield"
                            label="نام کاربری"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <img
                                    alt="user_icon"
                                    style={{ width: "100%" }}
                                    src={userIcon}
                                  />
                                </InputAdornment>
                              )
                            }}
                            error={
                              errors.username && touched.username ? true : null
                            }
                            helperText={
                              errors.username && touched.username
                                ? errors.username
                                : null
                            }
                            fullWidth
                          />
                          <TextField
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            type="password"
                            label="کلمه عبور"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <img
                                    alt="star_icon"
                                    style={{ width: "100%" }}
                                    src={starIcon}
                                  />
                                </InputAdornment>
                              )
                            }}
                            error={
                              errors.password && touched.password ? true : null
                            }
                            helperText={
                              errors.password && touched.password
                                ? errors.password
                                : null
                            }
                            fullWidth
                          />
                        </div>
                      </div>
                    </MyFrom>
                    <div className={classes.formHolder} style={{ margin: 60 }}>
                      <Fab
                        //Temprory
                        to="/user-submit"
                        
                        disabled={isSubmitting}
                        //onClick={handleSubmit}
                        type="submit"
                        variant="extended"
                        color="secondary"
                        className={classes.fab}
                      >
                        <div className={classes.insideBtn}>
                          <span>ورود</span>
                          <img alt="arrow_icon" src={leftArrow} />
                        </div>
                      </Fab>
                    </div>
                  </Grid>
                )}
              />
            </Grid>
          </MyPaper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ upm }) => ({
  upm
});

export default connect(
  mapStateToProps,
  { userLogin }
)(withStyles(styles)(Login));
