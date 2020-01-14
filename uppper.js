const http=require('http')
const map=require('through2-map')

// var server=http.createServer(function(request,response){
// 	if(request.method!='POST'){
// 		return response.end('give post method\n')
// 	}
// 	request.pipe(map(function(chunk){
// 		return chunk.toString().toUpperCase()
// 	})).pipe(response)
// })
// server.listen(process.argv[2])


var server=http.createServer(function(inStream,outStream){
	if(inStream.method!='POST'){
		return outStream.end('give post method\n')
	}
inStream.pipe(map(function(chunk){
	return chunk.toString().toUpperCase()
})).pipe(outStream)
})
server.listen(process.argv[2])
