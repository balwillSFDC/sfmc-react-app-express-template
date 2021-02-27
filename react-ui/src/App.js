import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import React from 'react'
import store from './store'

const mapStateToProps = state => {
  return {
    buttonClicked: state.buttonClicked,
    pageLoaded: state.pageLoaded,
    authCode: state.authCode,
    accessToken: state.accessToken,
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
    this.buttonClick = this.buttonClick.bind(this)
  }

  componentDidMount() {
    if (window.location.href.includes('?code=')) {
      var urlParams = new URLSearchParams(window.location.search)

      this.props.dispatch({
        type: 'PAGE_LOAD_SUCCESSFUL',
        payload: {
          authCode: urlParams.get('code') 
        }
      })      
      // sfmcHelper.getAccessToken(urlParams.get('code'))
    } else {
      this.props.dispatch({
        type: 'PAGE_LOAD_INITIATED'
      })
    }
  }

  buttonClick() {
    this.props.dispatch({
      type: 'BUTTON_CLICKED'
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
