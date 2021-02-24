import logo from './logo.svg';
import './App.css';
import sfmcHelper from './sfmcHelper'
import sfmcClient from './sfmcClient'
import { connect } from 'react-redux'
import React from 'react'
import store from './store'

const mapStateToProps = state => {
  return {
    buttonClicked: state.buttonClicked
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

  buttonClick() {
    this.props.dispatch({
      type: 'BUTTON_CLICKED',
      payload: {
        buttonClicked: true 
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
