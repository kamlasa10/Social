import React, {useEffect} from 'react';
import './app.scss'
import {BrowserRouter, Redirect, Route, useHistory, Switch} from 'react-router-dom';
import Header from './component/header/header';
import Aside from './component/aside/aside';
import News from './component/news/news';
import Music from './component/music/music';
import Settings from './component/settings/settings';
import DialogsContainer from "./component/dialogs/dialogsContainer";
import UsersContainer from "./component/users/userContainer";
import ProfileContainer from "./component/profile/profileContainer.js";
import {connect} from "react-redux";
import {establishInitializationApp} from "./redux/appReducer";
import Loading from "./component/common/loading/loading";
import Login from "./login/login";
import {comeLogin, logoutUserAuth} from "./redux/authReducer";

const App = ({auth, login, establishInitializationApp, initialization, comeLogin, logoutUserAuth, captcha}) => {

  useEffect(() => {
    establishInitializationApp();
  }, []);

  if (!initialization) return <Loading/>

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header logoutUserAuth={logoutUserAuth} auth={auth} login={login}/>
        <Aside/>
        <div className="content">
          <Switch>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/login' render={() => <Login captcha={captcha} auth={auth} comeLogin={comeLogin}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/Music' component={Music}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/Settings' component={Settings}/>
            <Route path='/' render={() =>
              <ProfileContainer/>
            }/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    login: state.auth.login,
    initialization: state.app.initialization,
    captcha: state.auth.captcha
  }
}

export default connect(mapStateToProps, {establishInitializationApp, comeLogin, logoutUserAuth})(App);
