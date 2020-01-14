var fs=require('fs')
var path=require('path')

module.exports=(dir,extent,callback)=>{
	fs.readdir(dir,(err,list)=>{//readfile
		if(err) return callback(err);

		flist=list.filter(file =>{//filtering lists
			return path.extname(file)=== '.' + extent;
		});
		callback(null,flist)
	});
}