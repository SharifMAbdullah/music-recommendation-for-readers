var axios = require('axios');
var FormData = require('form-data');
const fs = require('fs');
const constants = require("./CONSTANTS.js")

function getTextFromImage(){
    
    const imageBuffer = fs.readFileSync('eng.png');
    const data = new FormData();
    data.append('url', imageBuffer, 'eng.png');
    data.append('language', 'eng');
    data.append('isOverlayRequired', 'false');
    data.append('iscreatesearchablepdf', 'false');
    data.append('issearchablepdfhidetextlayer', 'false');
    data.append("apikey", constants.API_KEY_OCR_SPACE)

// Make a POST request with Axios
axios.post('https://api.ocr.space/parse/image', data, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
  .then(response => {
    console.log(response.data.ParsedResults[0].ParsedText)
  })
  .catch(error => {
    console.error('Error');
    console.error(error);
  });
}

function uploadImage(){

    const imageBuffer = fs.readFileSync('eng.png');
    const data = new FormData();
    data.append('source', imageBuffer, 'eng.png');
    data.append('action', 'upload');
    data.append("key", constants.API_KEY_FREE_IMAGE_UPLOAD)

    axios.post('https://freeimage.host/api/1/upload', data, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    })
  .then(response => {
    console.log(response.data.image.display_url);
  })
  .catch(error => {
    console.error(error);
  });
}

module.exports = {getTextFromImage, uploadImage}