import React, { Component } from "react";
import { Redirect } from "react-router-dom";
//import jwt from 'jwt-decode';
import { connect } from "react-redux";
//import { setUserRole } from "../../redux/actions/upm";
//import Login from '../login';

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    };
  }

  componentWillMount() {
    this.readToken();
  }

  readToken = async () => {
    // const token = sessionStorage.getItem("token");
    // if(!token || token === null){
    //     this.setState({role:"not-login"})
    // }else{
    //     this.props.setUserRole();
    //     const decoded = jwt(token)
    //     this.setState({role:decoded.Role})
    // }

    //Temp
    this.setState({ role: "UserSubmit" });
  };

  render() {
    if (this.state.role === "not-login") {
      return <Redirect to="/login" />;
    } else if (this.state.role === "UserSubmit") {
      return <Redirect to="/user-submit" />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default connect(
  null,

)(Default);
