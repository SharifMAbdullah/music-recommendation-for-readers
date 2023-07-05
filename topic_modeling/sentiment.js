const axios = require('axios');


function get_sentiment(text){
    const apikey = "TX72hysrCDR39QxMvHSpIcDM2q7lJNZR";
    
    axios.post("https://api.apilayer.com/sentiment/analysis", {
	body: text
    }, {
	headers: {
	    'apikey': apikey
	}
    })
	.then((response) => console.log(response.data))
	.catch((error) => console.log("error", error));
}



var raw = "your eyes they shine so bright";

module.exports = {get_sentiment}
