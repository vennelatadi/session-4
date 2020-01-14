const net=require('net');
const moment=require('moment');

const port=process.argv[2];
const server = net.createServer(socket=>{
	const time=moment().format('YYYY-MM-DD HH:mm');
	socket.write(time);
	socket.end('\n')
})
server.listen(port)

// var net=require('net')
// function zeroFill (i){
// 	return (i<10 ? '0': '')+i
// }
// function newDate () {
// 	var d = new Date()
// 	return d.getFullYear() + '-' +
// 	zeroFill(d.getMonth() + 1) + '-' +
// 	zeroFill(d.getDate()) + ' ' +
// 	zeroFill(d.getHours())+':'+
// 	zeroFill(d.getMinutes())
// }
// var server=net.createServer(function (socket){
// 	socket.write(newDate())
// 	socket.end('\n')
// })
// server.listen(Number(process.argv[2]))


// const net=require('net')
// var strftime = require('strftime')

//     console.log(strftime('%Y %m %d %H:%M')) 
//     console.log(strftime('%F %T', new Date()))
//    var server=net.createServer(function (socket){
//    	socket.write(strftime())
// 	socket.end('\n')
// 	})
// 	server.listen(Number(process.argv[2]))