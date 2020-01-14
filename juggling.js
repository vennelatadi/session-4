// var http=require('http')
// const bl=require('bl')
// const async=require('async')

// const urls=process.argv.slice(2);

// async.eachSeries(urls,(url,next)=>{
// 	http.get(url,response=>{
// 	response.pipe(bl((err,data)=>{//pipes all data into it
// 		if(err) return next(err)
// 		data=data.toString();
// 	    console.log(data);
// 	    next();
// 	}));
// });
// });


const http=require('http')
const bl=require('bl')
let result=[]
let count=0;

function results(){
	for(var i=0; i<3; i++){
		console.log(result[i])
	}
}

function httpGet(index){
	http.get(process.argv[2+index],(response)=>{
		response.pipe(bl((err,data)=>{
			if(err){
				return console.log(err)
			}
			result[index]=data.toString();
			count++;
			if(count===3){
				results()
			}
		}))
	})
}

for(let i=0;i<3;i++){
	httpGet(i);
}