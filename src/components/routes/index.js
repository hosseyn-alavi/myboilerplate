import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../../containers/login";
import NoramalUser from "../../containers/normalUser";
import Default from "../../containers/default";
import { connect } from "react-redux";
import { setUserRole } from "../../redux/actions/upm";

class Routes extends Component {
  componentWillMount() {
    this.props.setUserRole();
  }
  render() {
    const { userRole } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Default />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route
            exact
            path="/user-submit"
            render={() => (userRole === "UserSubmit" ? <NoramalUser /> : <Login />)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ upm }) => ({
  userRole: upm.userRole
});
export default connect(
  mapStateToProps,
  { setUserRole }
)(Routes);
