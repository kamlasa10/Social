import React from 'react';
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {addMessage} from "../../redux/dialogsReducer";
import {compose} from "redux";
import withAuthRedirect from "../common/hoc/userAuth";

const DialogsContainer = (props) => {
  return <Dialogs dialogs={props.dialogs} messages={props.messages} addMessage={props.addMessage} />
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialog,
    messages: state.dialogs.messages
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {addMessage})
)(DialogsContainer)