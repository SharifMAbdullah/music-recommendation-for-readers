const ocr = require('./ocr/ocr.js');
const sentiment = require('./topic_modeling/sentiment.js')






const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/v1/sentiment/upload/image', (req, res)=>{
	console.log('Got the request!');
	console.log(req.body);
	res.send({'Status':'Working!'});
});

app.get('/api/v1/sentiment', (req, res) => {
    text = ocr.getTextFromImage('./ocr/eng.png')
	.then((text)=>{
	    sentiment.get_sentiment(text)
		.then((data)=>{
		    res.send({'Text': text, 'Sentiment': data});
		})
	});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
