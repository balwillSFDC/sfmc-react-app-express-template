const clientId = process.env.REACT_APP_SFMC_CLIENTID;
const clientSecret = process.env.REACT_APP_SFMC_CLIENTSECRET;
const stack = process.env.REACT_APP_SFMC_STACK;
const origin = process.env.REACT_APP_SFMC_ORIGIN;
const authOrigin = process.env.REACT_APP_SFMC_AUTHORIGIN;
const soapOrigin = process.env.REACT_APP_SFMC_SOAPORIGIN;
const redirectUri = process.env.REACT_APP_REDIRECTURI
const encodedRedirectUri = encodeURIComponent(redirectUri)
const ET_Client = require('sfmc-fuelsdk-node')
const axios = require('axios')

let functions = {

  getAccessToken: (authCode) => {
    let body = {
      grant_type: 'authorization_code',
      code: authCode,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri
    }
    
    fetch(`${authOrigin}/v2/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        store.dispatch({
          type: 'ACCESS_TOKEN_RECEIVED',
          payload: {
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            tokenExpirationSeconds: data.expires_in
          }
        })
      })
      
  }
}

module.exports = { functions }