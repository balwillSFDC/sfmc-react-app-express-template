import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import sfmcHelper from './sfmcHelper'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const initialState = {
  buttonClicked: false
}

const customMiddleWare = store => next => action => {
  sfmcHelper.sampleFetch().then()
  
  return next(action)
}

const middlewareEnhancer = composeWithDevTools(applyMiddleware(logger, thunkMiddleware))

const reducer = (state = initialState, action) => {
  if (action.type === 'BUTTON_CLICKED') {
    return {
      ...state,
      buttonClicked: action.payload.buttonClicked
    }
  }

  return state
}

const store = createStore(reducer, middlewareEnhancer)

export default store;
