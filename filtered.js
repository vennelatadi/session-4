const fs=require('fs')
const path=require('path')

const dir=process.argv[2]//to read directory
const extent=`.${process.argv[3]}`; //to read an extension

fs.readdir(dir,(err,list)=>{
	list.forEach(file=>{
		if (path.extname(file)===extent) {
			console.log(file)
		}
  	});
});