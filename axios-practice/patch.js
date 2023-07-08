const axios = require('axios').default;

function patch_content(){
    const resourceId = 1;
    axios .patch('https://jsonplaceholder.typicode.com/posts/'+resourceId, {
	title: 'Abhijit Paul learning foo',
    })
	.then((response)=>{
	    console.log(response.data)
	})
	.catch((error)=>{
	    console.error(error);
	});
}

patch_content(2);
