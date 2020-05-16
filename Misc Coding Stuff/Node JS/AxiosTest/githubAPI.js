const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/ianedwards-jpg/emails')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 