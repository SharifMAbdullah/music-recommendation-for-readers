const axios = require('axios');


async function get_sentiment(text){
    const apikey = "TX72hysrCDR39QxMvHSpIcDM2q7lJNZR";
    
    const sentiment = await axios.post("https://api.apilayer.com/sentiment/analysis", {
	body: text
    }, {
	headers: {
	    'apikey': apikey
	}
    });
    return sentiment.data;
}



var raw = "your eyes they shine so bright";

module.exports = {get_sentiment}
