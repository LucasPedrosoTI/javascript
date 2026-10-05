var URL = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU-TOKEN';

const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data')

var formData = new FormData();

function sendJSON (){
    formData.append('answer', fs.createReadStream('./answer.json'))
    fetch(URL, {method: 'POST', body: formData} )
    .then( res => console.log(res))
    .catch(err=>console.log('ERROR', err.message))
}

sendJSON();
