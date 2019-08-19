import React, { Component } from "react";
import { connect } from "react-redux";


class NoramalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNewCaseModal: false
    };
  }




  componentWillReceiveProps(nextProps){
    if(nextProps.caseNumberForEdit){
      this.setState({openNewCaseModal:true})
    }
  }


  render() {
    return (
      <div>
Main Page
      </div>
    );
  }
}

// const mapStateToProps=({})=>({
  
// })

export default connect(

)(NoramalUser);
