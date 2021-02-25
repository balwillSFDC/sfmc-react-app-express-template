const ET_Client = require('sfmc-fuelsdk-node')
const clientId = process.env.REACT_APP_SFMC_CLIENTID;
const clientSecret = process.env.REACT_APP_SFMC_CLIENTSECRET;
const stack = process.env.REACT_APP_SFMC_STACK;
const origin = process.env.REACT_APP_SFMC_ORIGIN;
const authOrigin = process.env.REACT_APP_SFMC_AUTHORIGIN;
const soapOrigin = process.env.REACT_APP_SFMC_SOAPORIGIN;

let sfmcClient = new ET_Client(clientId, clientSecret, stack, {
  origin,
  authOrigin,
  soapOrigin,
  authOptions: {
    authVersion: 2,
    // accountId: parentBU,
    applicationType: 'server',
  },
  // globalReqOptions: {
  //   headers: {
  //     'Sec-Fetch-Mode': 'no-cors'
  //   }
  // }
});

export default sfmcClient