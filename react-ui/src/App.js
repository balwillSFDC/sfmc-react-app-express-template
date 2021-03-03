import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import React from 'react'
import store from './store'
import { fetchAccessToken, fetchAuthCode } from './actions'

const mapStateToProps = state => {
  return {
    authCode: state.authCode,
    authCodeLogin: state.authCodeLogin,
    retrievingAuthCode: state.retrievingAuthCode,
    authCodeRetrieved: state.authCodeRetrieved,
    accessToken: state.accessToken,
    retrievingAccessToken: state.retrievingAccessToken,
    accessTokenRetrieved: state.accessTokenRetrieved,
    refreshToken: state.refreshToken,
    tokenExpirationSeconds: state.tokenExpirationSeconds,
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // Uncomment the code below if you want to enable the SFMC Authorization Code => Access Token flow for Web Apps
    
    // if (window.location.href.includes('?code=') && !this.props.accessToken) {
    //   this.props.dispatch(fetchAccessToken())
    // } else if (this.props.authCodeLogin && !this.props.accessTokenRetrieved) {
    //   window.location.assign(this.props.authCodeLogin)
    // } else if (!this.props.authCodeLogin && !this.props.authCode) {
    //   this.props.dispatch(fetchAuthCode())
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome! This is a React/SFMC Bootstrap. All that's needed is to build your react layout and define your Routes. The backend work is taken care of! 
          </p>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
