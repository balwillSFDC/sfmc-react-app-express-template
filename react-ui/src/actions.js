import axios from 'axios'


// returns the url that will redirect the user to the login screen with auth code attached
export const fetchAuthCode = () => {
  return async (dispatch, getState) => {
    // Tell the app we're fetching auth code
    dispatch({
      type: 'FETCH_AUTHORIZATION_CODE_REQUEST'
    })

    // Try and fetch the Authorization Code
    try {  
      let response = await axios.get('/api/authcode')
      // Tell the App we've successfully retrieve auth code
      dispatch({
        type: 'FETCH_AUTHORIZATION_CODE_SUCCESS',
        payload: {
          authCodeLogin: response.data  
        }
      })
    } 
    // Tell the App auth code retrieval failed 
    catch (error) {
      dispatch({
        type: 'FETCH_AUTHORIZATION_CODE_ERROR'
      })
    }
  }
}

export const fetchAccessToken = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'FETCH_ACCESS_TOKEN_REQUEST'
    })

    try {
      var urlParams = new URLSearchParams(window.location.search)
      
      let response = await axios.post('api/accesstoken', {
        code: urlParams.get('code')
      })

      dispatch({
        type: 'FETCH_ACCESS_TOKEN_SUCCESS',
        payload: {
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          tokenExpirationSeconds: response.data.expires_in,
          authCode: urlParams.get('code'),
        }
      })
      
    } catch (error) {
      dispatch({
        type: 'FETCH_ACCESS_TOKEN_FAILURE',
        payload: error
      })
    }

  }
}