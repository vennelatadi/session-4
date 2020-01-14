const numbers=process.argv.slice(2)
const result=numbers.reduce((acc,num)=>{
	return acc + Number(num)
},0);

console.log(result)



// var result=0

// for (var i = 2;i<process.argv.length;i++){
// 	reuslt +=Number(process.argv[i])
// }
// conole.log(result);


// another way:
// let result = 0

//     for (let i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }

//     console.log(result)