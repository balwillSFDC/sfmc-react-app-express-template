const initialState = {
  authCode: '',
  authCodeLogin: '',
  retrievingAuthCode: false,
  authCodeRetrieved: false,
  accessToken: '',
  retrievingAccessToken: false,
  accessTokenRetrieved: false,
  refreshToken: '',
  tokenExpirationSeconds: 0,
  buttonClicked: false,
}

const customMiddleWare = store => next => action => {
  // Custom Middleware
  // ...

  return next(action)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTHORIZATION_CODE_REQUEST':
      return {
        ...state,
        retrievingAuthCode: true
      }
    case 'FETCH_AUTHORIZATION_CODE_SUCCESS':
      return {
        ...state,
        retrievingAuthCode: false,
        authCodeRetrieved: true,
        authCodeLogin: action.payload.authCodeLogin
      }
    case 'FETCH_AUTHORIZATION_CODE_FAILURE':
      return {
        ...state,
        retrievingAuthCode: false,
        authCodeRetrieved: false,
        authCode: ''
      }
    case 'FETCH_ACCESS_TOKEN_REQUEST':
      return {
        ...state,
        retrievingAccessToken: true
      }
    case 'FETCH_ACCESS_TOKEN_SUCCESS':
      return {
        ...state,
        retrievingAccessToken: false,
        accessTokenRetrieved: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        tokenExpirationSeconds: action.payload.tokenExpirationSeconds,
      }
    case 'FETCH_ACCESS_TOKEN_FAILURE':
    default:
      return state;
  }

};

export {customMiddleWare, reducer}