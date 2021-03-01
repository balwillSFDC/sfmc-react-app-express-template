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
    buttonClicked: state.buttonClicked,
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

class App extends React.Component {
  constructor() {
    super()
    this.buttonClick = this.buttonClick.bind(this)
  }

  componentDidMount() {
    if (window.location.href.includes('?code=') && !this.props.accessToken) {
      this.props.dispatch(fetchAccessToken())
    } else if (this.props.authCodeLogin && !this.props.accessTokenRetrieved) {
      window.location.assign(this.props.authCodeLogin)
    } else if (!this.props.authCodeLogin && !this.props.authCode) {
      this.props.dispatch(fetchAuthCode())
    }
  }

  buttonClick() {
    this.props.dispatch({
      type: 'BUTTON_CLICKED',
      payload: {
        authCode: this.props.authCode
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is a React app to test SFMC APIs 
          </p>
          <button onClick={this.buttonClick}>Execute API Request</button> 
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
