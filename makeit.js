var myModule=require('./myModule.js')

var dir=process.argv[2]
var extent=process.argv[3];

myModule(dir,extent,(err,flist)=>{
	if(err) {return console.error(err)}
	flist.forEach(file=>{
		console.log(file)
	});
});