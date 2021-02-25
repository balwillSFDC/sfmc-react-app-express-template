import {createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import sfmcHelper from './sfmcHelper'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { customMiddleWare, reducer } from './reducer'





const middlewareEnhancer = composeWithDevTools(applyMiddleware(logger, customMiddleWare, thunkMiddleware))

let persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer, middlewareEnhancer)
let persistor = persistStore(store)

export {store, persistor}
