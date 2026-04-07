var data =[100,200,300,400,500]
//add 1000 in all elments and store updated value in new variable
//push


//const lang =["hindi","eng","marathi","tamil","gujrati","tamil","telugu","punabi"]
//upper conv new variable
// var newData=[];
// for(let i=0;i<data.length;i++){

//     newData.push(data[i]+1000)
// }
// console.log(newData)


var newData = data.map((d)=>{
    return d+1000
})
console.log(newData)


const lang =["hindi","eng","marathi","tamil","gujrati","tamil","telugu","punabi"]

var upperLang = lang.map((elm)=>elm.toUpperCase())
console.log(upperLang)

var sales = [100,200,300,400,500,600,7000]

var saleswithdis = sales.map((s)=>s*0.90)
console.log(saleswithdis)