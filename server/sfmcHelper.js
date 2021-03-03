const clientId = process.env.REACT_APP_SFMC_CLIENTID;
const clientSecret = process.env.REACT_APP_SFMC_CLIENTSECRET;
const stack = process.env.REACT_APP_SFMC_STACK;
const origin = process.env.REACT_APP_SFMC_ORIGIN;
const authOrigin = process.env.REACT_APP_SFMC_AUTHORIGIN;
const soapOrigin = process.env.REACT_APP_SFMC_SOAPORIGIN;
const redirectUri = process.env.REACT_APP_REDIRECTURI
const encodedRedirectUri = encodeURIComponent(redirectUri)
var FuelSoap = require('fuel-soap');
const axios = require('axios')

let accessToken = ""

var options = {
  auth: {
    accessToken
    , authUrl: `${authOrigin}/v2/token`
    , clientId
    , clientSecret
  }
  , soapEndpoint: `${soapOrigin}/Service.asmx`
};

var SoapClient = new FuelSoap(options);

// Function that lets you see what properties are retrievable from API 
// SoapClient.describe('DataExtension', (err, response) => {
//     let properties = response.body.ObjectDefinition.Properties
//     let propertyArray = [];
//     properties.forEach(property => {
//         if (property.IsRetrievable == 'true') {
//             propertyArray.push(property.Name)
//         }
//     })

//     console.log(propertyArray)
// })


