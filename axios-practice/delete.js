const axios = require('axios').default;

function delete_content(resourceId){
    axios .delete('https://jsonplaceholder.typicode.com/posts/'+resourceId)
	.then((response)=>{
	    console.log(response.data)
	})
	.catch((error)=>{
	    console.error(error);
	});
}

delete_content(2);
