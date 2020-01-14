var http=require('http')
http.get(process.argv[2],(response)=>{
	response.on('error', (err)=> console.log(err));//checks for if there ia any error
	response.setEncoding('utf8');//to convert buffer to string
	response.on('data',(data)=>{//checks for data
		console.log(data)
	});
});