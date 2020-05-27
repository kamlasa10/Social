import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const withAuthRedirect = (Component) => {
  let withAuth = (props) => {
    if (!props.auth) return <Redirect to={'/login'}/>
    return <Component {...props} />
  };

 return connect(mapStateToProps)(withAuth);
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth
  }
}

export default withAuthRedirect;