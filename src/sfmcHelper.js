import sfmcClient from './sfmcClient'

let functions = {

  getAllDataExtensions: () => {
    var options = {
        props: [
        'ObjectID',
        'PartnerKey',
        'CustomerKey',
        'Name',
        'CreatedDate',
        'ModifiedDate',
        'Client.ID',
        'Description',
        'IsSendable',
        'IsTestable',
        'SendableDataExtensionField.Name',
        'SendableSubscriberField.Name',
        'Template.CustomerKey',
        'CategoryID',
        'Status',
        'IsPlatformObject',
        'DataRetentionPeriodLength',
        'DataRetentionPeriodUnitOfMeasure',
        'RowBasedRetention',
        'ResetRetentionPeriodOnImport',
        'DeleteAtEndOfRetentionPeriod',
        'RetainUntil',
        'DataRetentionPeriod'
        ],
        filter: {
          leftOperand: 'Client.ID',
          operator: 'isNotNull',
          rightOperand: ''
        }
    };
  
    const de = sfmcClient.dataExtension(options);
  
    let dataExtensionsResult = new Promise((resolve, reject) => {
        de.get((err, res) => {
        if (err) console.log(err);
        if (res) resolve(res.body.Results);
        });
    });
  
    return dataExtensionsResult;
  },

  sampleFetch: () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}

export default functions
