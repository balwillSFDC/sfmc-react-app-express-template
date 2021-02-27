// import sfmcClient from './sfmcClient'
// import {store} from './store'
// const clientId = process.env.REACT_APP_SFMC_CLIENTID;
// const clientSecret = process.env.REACT_APP_SFMC_CLIENTSECRET;
// const stack = process.env.REACT_APP_SFMC_STACK;
// const origin = process.env.REACT_APP_SFMC_ORIGIN;
// const authOrigin = process.env.REACT_APP_SFMC_AUTHORIGIN;
// const soapOrigin = process.env.REACT_APP_SFMC_SOAPORIGIN;
// const redirectUri = process.env.REACT_APP_REDIRECTURI
// const encodedRedirectUri = encodeURIComponent(redirectUri)

// let functions = {

//   getAllDataExtensions: () => {
//     var options = {
//         props: [
//         'ObjectID',
//         'PartnerKey',
//         'CustomerKey',
//         'Name',
//         'CreatedDate',
//         'ModifiedDate',
//         'Client.ID',
//         'Description',
//         'IsSendable',
//         'IsTestable',
//         'SendableDataExtensionField.Name',
//         'SendableSubscriberField.Name',
//         'Template.CustomerKey',
//         'CategoryID',
//         'Status',
//         'IsPlatformObject',
//         'DataRetentionPeriodLength',
//         'DataRetentionPeriodUnitOfMeasure',
//         'RowBasedRetention',
//         'ResetRetentionPeriodOnImport',
//         'DeleteAtEndOfRetentionPeriod',
//         'RetainUntil',
//         'DataRetentionPeriod'
//         ],
//         filter: {
//           leftOperand: 'Client.ID',
//           operator: 'isNotNull',
//           rightOperand: ''
//         }
//     };
  
//     const de = sfmcClient.dataExtension(options);
  
//     let dataExtensionsResult = new Promise((resolve, reject) => {
//         de.get((err, res) => {
//         if (err) console.log(err);
//         if (res) resolve(res.body.Results);
//         });
//     });
  
//     return dataExtensionsResult;
//   },

//   getAuthCode: () => {
//     fetch(`${authOrigin}/v2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodedRedirectUri}`)
//       .then(response => window.location.assign(response.url))
//   },

//   getAccessToken: (authCode) => {
//     let body = {
//       grant_type: 'authorization_code',
//       code: authCode,
//       client_id: clientId,
//       client_secret: clientSecret,
//       redirect_uri: redirectUri
//     }
    
//     fetch(`${authOrigin}/v2/token`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(body)
//     })
//       .then(response => response.json())
//       .then(data => {
//         store.dispatch({
//           type: 'ACCESS_TOKEN_RECEIVED',
//           payload: {
//             accessToken: data.access_token,
//             refreshToken: data.refresh_token,
//             tokenExpirationSeconds: data.expires_in
//           }
//         })
//       })
      
//   }


// }

// export default functions
