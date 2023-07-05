const axios = require('axios').default;

function barebone_get(){
    axios.get("https://api.agify.io?name=abhijit")
	.then((response)=>{
	    console.log('Age of abhijit: ' + response.data['age']);
	})
	.catch((error)=>{
	    console.log(error);
	})
	.finally(()=>{
	    console.log("\t|Barebone GET.")
	})
}

function proper_get(){
    axios.get('https://api.agify.io/', {
	params: {
	    name: 'abhijit'
	}
    })
	.then((response)=>{
	    console.log("Age of Abhijit: "+response.data['age'])
	})
	.catch((error)=>{console.log(error);})
	.finally(()=>{
	    console.log("\t|Param GET.")
	})
}

async function async_get(name){
    const response = await axios.get('https://api.agify.io/', {
	params: {
	    name: name
	}
    })
    console.log('Age of '+name+": "+response.data['age'])
    console.log("\t|Async GET.")
}

function useful_api(){
    const API_KEY = 'd888d8d820a60a8395c5c5fb4b11833a';
    const url = 'https://api.themoviedb.org/3/movie/popular';
    axios
	.get(url, {
	    params: {
		api_key: 'd888d8d820a60a8395c5c5fb4b11833a'
	    }
	})
	.then((response) => {
	    console.log(response.data);
	})
	.catch((error) => {
	    console.error(error);
	});
}
barebone_get();
proper_get();
async_get('abhijit');
useful_api();
