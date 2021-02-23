import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import sfmcHelper from './sfmcHelper'


const initialState = {
  buttonClicked: false
}

const loggerMiddleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('updated state', store.getState())


  if (action.type === 'BUTTON_CLICKED') {
    sfmcHelper.getAllDataExtensions().then(console.log)
  }


  return result

}


const middlewareEnhancer = applyMiddleware(loggerMiddleware)

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
