const fs=require('fs')
const buffer= fs.readFileSync(process.argv[2],'utf8')
const str=buffer.split('\n').length -1;
console.log(str)