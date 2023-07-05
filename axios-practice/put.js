const axios = require('axios').default;

function update_content(){
    const resourceId = 1;
    axios .put('https://jsonplaceholder.typicode.com/posts/'+resourceId, {
	title: 'Abhijit Paul learning foo',
	'body': 'look at duh bodieh',
	'userid': 1201
    })
	.then((response)=>{
	    console.log(response.data)
	})
	.catch((error)=>{
	    console.error(error);
	});
}

update_content(2);
