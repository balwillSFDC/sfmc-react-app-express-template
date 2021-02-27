
const initialState = {
  buttonClicked: false,
  pageLoaded: false,
  authCode: '',
  accessToken: '',
  refreshToken: '',
  tokenExpirationSeconds: 0,
}

const customMiddleWare = store => next => action => {
  
  switch(action.type) {
    case 'PAGE_LOAD_INITIATED':
      fetch('/api')
        .then(res => res.json())
        .then(message => console.log(message))
    // case 'PAGE_LOAD_SUCCESSFUL':
    //   return sfmcHelper.getAccessToken(action.payload.authCode)
  }
  
  return next(action)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAGE_LOAD_SUCCESSFUL':
      return {
        ...state,
        pageLoaded: true
      };
    case 'BUTTON_CLICKED':
      return {
        ...state,
        buttonClicked: true
      };
    case 'ACCESS_TOKEN_RECEIVED':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        tokenExpirationSeconds: action.payload.tokenExpirationSeconds
      }
    default:
      return state;
  }

};

export {customMiddleWare, reducer}