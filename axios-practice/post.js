const axios = require('axios').default;

function add_resource(){
    axios
	.post("https://jsonplaceholder.typicode.com/posts", {
	    title: 'foo',
	    body: 'bar bar bar',
	    userId: 1
	})
	.then((response)=>{
	    console.log(response.data);
	    //get_all_resource();
	    get_resource(1);
	})
	.catch((error)=>{
	    console.log(error);
	})
}


function get_resource(resourceId){
    axios
	.get("https://jsonplaceholder.typicode.com/posts/"+resourceId)
	.then((response)=>{
	    console.log(response.data);
	})
	.catch((error)=>{
	    console.log(error);
	});
}

function get_all_resource(){
    axios
	.get('https://jsonplaceholder.typicode.com/posts')
	.then((response)=>{console.log(response);})
	.catch((error)=>{console.error(error);})
}


async function generate_image_from_text_openai() {
  try {
    const apiKey = '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';
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: "a photo of a happy corgi puppy sitting and facing forward, studio light, longshot",
        n: 1,
        size: "1024x1024"
      },
      {
        headers: {
          'Authorization': 'Bearer ' + apiKey
        }
      }
    );
    console.log(response.data); // Do something with the response data
  } catch (error) {
    console.error(error);
  }
}


async function generate_image_from_text_deepai() {
  try {
    const apiKey = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K';
    const url = 'YOUR_TEXT_URL';

    const response = await axios.post(
      'https://api.deepai.org/api/text2img',
      {
        text: url
      },
      {
        headers: {
          'api-key': apiKey
        }
      }
    );

    console.log(response.data); // Do something with the response data
  } catch (error) {
    console.error(error);
  }
}

//add_resource();
generate_image_from_text_deepai();
