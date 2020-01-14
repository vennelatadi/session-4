const http=require('http')
const url=require('url')
const moment=require('moment')

const server=http.createServer((req,res)=>{
	const {pathname,query}=url.parse(req.url,true);
	res.writeHead(200,{'content-Type': 'application/json'})

	if (pathname==='/api/parsetime'){
		return res.end(JSON.stringify({
			hour:moment(query.iso).hour(),
			minute:moment(query.iso).minute(),
			second:moment(query.iso).second()
		}))
	}
	if(pathname==='/api/unixtime'){
		return res.end(JSON.stringify({
			unixtime:Number(moment(query.iso).format('x'))
		}))
	}
	res.writeHead(404,{'content-Type': 'application/json'})
	res.end(JSON.stringify({
		success: false,
		message: `${pathanme} is not specified`
	}))
})
server.listen(process.argv[2])