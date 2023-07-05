const ocr = require('./ocr/ocr.js');
const sentiment = require('./topic_modeling/sentiment.js')

text = ocr.getTextFromImage('./ocr/eng.png')
    .then((text)=>{
	console.log(sentiment.get_sentiment(text))
    });
