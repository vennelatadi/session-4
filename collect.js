// var http=require('http')
// http.get(process.argv[2],(response)=>{
// 	let result="";
// 	response.setEncoding('utf8');

// 	response.on('error', (err)=>{
// 		console.log(err)
// 	});
// 	response.on('data',(data)=>{ 
// 		result+= data;
// 	})

// 	response.on('end',()=>{
// 		console.log(result.length)
// 		console.log(result)	
// 	})
// })


var http=require('http')
var bl=require('bl')

http.get(process.argv[2],response=>{
	response.pipe(bl((err,data)=>{//pipes all data into it
		if(err) return console.log(err)
		data=data.toString();
		console.log(data.length)
	    console.log(data);
	}))
})