// IMPORTAÇÃO DE BIBLIOTECAS E DECLARAÇÃO DE CONSTANTES

const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs')
var abc = 'abcdefghijklmnopqrstuvwxyz'

const URL = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU-TOKEN';

// FUNÇÃO PARA REQUISITAR O JSON VIA API DA CODENATION 
function getJson(URL){
    var json;
    // GET USANDO AXIOS
axios.get(URL)
    .then(function (response) {json = response.data;})
    .then(() => {
    // console.log(json)
        json.decifrado = decifrar(json.cifrado, json.numero_casas) // CHAMANDO A FUNÇÃO DECIFRAR PARA DECIFRAR A FRASE CRIPTOGRAFADA
    // console.log(json)
        json.resumo_criptografico = encryptSha1(json.decifrado) // CHAMANDO A FUNÇÃO PARA CRIPTOGRAFAR EM SHA-1
    // console.log(json)
        strJSON = JSON.stringify(json) // METODO PARA CONVERTER letraes em javascript para uma String  JSON.
        // criar o arquivo answer.json com os dados da strJSON,callback em caso de erro
        fs.writeFile('answer.json', strJSON,  (err) => {
            if (err) throw err;
            console.log('Saved!');
        })})
    .catch(err=>console.log(err)) // callback em caso de erro na requisição
}

// FUNÇÃO PARA DECIFRAR A FRASE CRIPTOGRADA COM A CIFRA DE CESAR

function decifrar (text, desloc) {
    var result = "";
    for (let letra of text){ //ITERA SOBRE CADA LETRA DO TEXTO FORNECIDO
    if (abc.indexOf(letra) != -1) { // SE A LETRA NÃO ESTIVER NO ALFABETO RETORNA -1
        letra = ((letra.charCodeAt(0) - 97 - desloc) % 26) + 97
     } else {
         result += letra;
     }
    result += ((String.fromCharCode(letra)));
    } return result.replace(/\0/g, ''); //REGEX PARA REMOVER OS NULLs da string
} 

// FUNÇÃO PARA ENCRIPTAR SHA-1 COM A BIBLIOTECA CRYPTO
const encryptSha1 = texto => {
    const resumo = crypto
      .createHash('sha1')
      .update(texto)
      .digest('hex')
  
    return resumo
  }

getJson(URL);
